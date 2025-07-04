import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface OrderData {
  orderId: string;
  amount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const cashfreeAppId = Deno.env.get('CASHFREE_APP_ID')!;
    const cashfreeSecretKey = Deno.env.get('CASHFREE_SECRET_KEY')!;
    const cashfreeEnvironment = Deno.env.get('CASHFREE_ENVIRONMENT') || 'TEST'; // TEST or PROD

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    if (req.method === 'POST') {
      const { orderId, amount, customerName, customerEmail, customerPhone }: OrderData = await req.json();

      // Create Cashfree order
      const cashfreeOrderData = {
        order_amount: amount,
        order_currency: 'INR',
        order_id: orderId,
        customer_details: {
          customer_id: customerEmail,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone,
        },
        order_meta: {
          return_url: `${req.headers.get('origin')}/order-success?orderId=${orderId}`,
          notify_url: `${supabaseUrl}/functions/v1/cashfree-webhook`,
        }
      };

      // Generate Cashfree API signature according to their documentation
      const timestamp = Math.floor(Date.now() / 1000).toString();
      
      // Create signature string as per Cashfree docs: POST + endpoint + body + timestamp
      const requestBody = JSON.stringify(cashfreeOrderData);
      const signatureData = `POST\n/pg/orders\n${requestBody}\n${timestamp}`;
      
      console.log('Signature data:', signatureData);
      console.log('Using timestamp:', timestamp);
      console.log('Request body:', requestBody);
      
      const encoder = new TextEncoder();
      const key = await crypto.subtle.importKey(
        'raw',
        encoder.encode(cashfreeSecretKey),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      );
      
      const signature = await crypto.subtle.sign(
        'HMAC',
        key,
        encoder.encode(signatureData)
      );
      
      const signatureHex = Array.from(new Uint8Array(signature))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
      
      console.log('Generated signature:', signatureHex);

      const baseUrl = cashfreeEnvironment === 'PROD' 
        ? 'https://api.cashfree.com' 
        : 'https://sandbox.cashfree.com';

      // Create order with Cashfree
      const response = await fetch(`${baseUrl}/pg/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-cf-signature': signatureHex,
          'x-timestamp': timestamp,
          'x-app-id': cashfreeAppId,
        },
        body: JSON.stringify(cashfreeOrderData)
      });

      const cashfreeOrder = await response.json();
      console.log('Cashfree order response:', cashfreeOrder);

      if (response.ok && cashfreeOrder.payment_session_id) {
        // Update order in database with payment session info
        const { error } = await supabase
          .from('orders')
          .update({
            payment_gateway_data: cashfreeOrder,
            payment_gateway_order_id: cashfreeOrder.order_id,
            payment_link_url: cashfreeOrder.payment_links?.web || null
          })
          .eq('id', orderId);

        if (error) {
          console.error('Error updating order:', error);
          throw error;
        }

        return new Response(
          JSON.stringify({
            success: true,
            payment_session_id: cashfreeOrder.payment_session_id,
            payment_link: cashfreeOrder.payment_links?.web,
            order_token: cashfreeOrder.order_token
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200,
          }
        );
      } else {
        console.error('Cashfree order creation failed:', cashfreeOrder);
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: cashfreeOrder.message || 'Failed to create payment order' 
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 400,
          }
        );
      }
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 405,
      }
    );

  } catch (error) {
    console.error('Error in cashfree-payment function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Internal server error' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
})