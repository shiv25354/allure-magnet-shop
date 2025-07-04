import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const cashfreeSecretKey = Deno.env.get('CASHFREE_SECRET_KEY')!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    if (req.method === 'POST') {
      const rawBody = await req.text();
      const signature = req.headers.get('x-cf-signature');
      const timestamp = req.headers.get('x-timestamp');

      console.log('Received webhook:', rawBody);

      // Verify webhook signature
      if (signature && timestamp) {
        const encoder = new TextEncoder();
        const signatureData = `${rawBody}${timestamp}`;
        
        const key = await crypto.subtle.importKey(
          'raw',
          encoder.encode(cashfreeSecretKey),
          { name: 'HMAC', hash: 'SHA-256' },
          false,
          ['verify']
        );
        
        const expectedSig = await crypto.subtle.sign(
          'HMAC',
          key,
          encoder.encode(signatureData)
        );
        
        const expectedSigHex = Array.from(new Uint8Array(expectedSig))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');

        if (signature !== expectedSigHex) {
          console.error('Invalid webhook signature');
          return new Response('Invalid signature', { status: 401 });
        }
      }

      const webhookData = JSON.parse(rawBody);
      const { order_id, payment_status, cf_order_id } = webhookData.data || webhookData;

      console.log('Processing webhook for order:', order_id, 'Status:', payment_status);

      // Update order status based on payment status
      let orderStatus = 'pending';
      switch (payment_status) {
        case 'SUCCESS':
          orderStatus = 'confirmed';
          break;
        case 'FAILED':
          orderStatus = 'failed';
          break;
        case 'CANCELLED':
          orderStatus = 'cancelled';
          break;
        default:
          orderStatus = 'pending';
      }

      // Update order in database
      const { error } = await supabase
        .from('orders')
        .update({
          status: orderStatus,
          payment_gateway_data: webhookData,
          updated_at: new Date().toISOString()
        })
        .eq('id', order_id);

      if (error) {
        console.error('Error updating order status:', error);
        return new Response('Database error', { status: 500 });
      }

      console.log(`Order ${order_id} status updated to ${orderStatus}`);

      return new Response('OK', { status: 200 });
    }

    return new Response('Method not allowed', { status: 405 });

  } catch (error) {
    console.error('Error in cashfree-webhook:', error);
    return new Response('Internal server error', { status: 500 });
  }
})