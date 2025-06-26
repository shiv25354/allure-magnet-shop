
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const deliforceApiKey = Deno.env.get('DELIFORCE_API_KEY');

const supabase = createClient(supabaseUrl, supabaseKey);

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { orderId, action = 'create' } = await req.json();

    if (!deliforceApiKey) {
      throw new Error('Deliforce API key not configured');
    }

    if (!orderId) {
      throw new Error('Order ID is required');
    }

    // Fetch order details from database
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single();

    if (orderError || !order) {
      throw new Error('Order not found');
    }

    let result;

    switch (action) {
      case 'create':
        result = await createDeliveryOrder(order);
        break;
      case 'track':
        result = await trackDelivery(orderId);
        break;
      default:
        throw new Error('Invalid action');
    }

    return new Response(JSON.stringify({ success: true, data: result }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Deliforce integration error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});

async function createDeliveryOrder(order: any) {
  const deliveryData = {
    pickup_address: {
      name: "Your Store",
      phone: "+91-9876543210",
      address: "Store Address, City, State, Pincode",
      latitude: 0,
      longitude: 0
    },
    drop_address: {
      name: order.full_name,
      phone: order.phone,
      address: `${order.address}, ${order.city}, ${order.state}, ${order.postal_code}`,
      latitude: 0,
      longitude: 0
    },
    order_details: {
      order_id: order.id,
      order_value: order.total_amount,
      payment_mode: order.payment_method === 'cod' ? 'COD' : 'Prepaid',
      cod_amount: order.payment_method === 'cod' ? order.total_amount : 0,
      items: Array.isArray(order.order_items) ? order.order_items : JSON.parse(order.order_items as string)
    },
    delivery_instructions: "Handle with care",
    priority: "normal"
  };

  console.log('Creating delivery order with data:', deliveryData);

  const response = await fetch('https://api.deliforce.io/v1/orders', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${deliforceApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(deliveryData)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Deliforce API error:', response.status, errorText);
    throw new Error(`Failed to create delivery order: ${response.status} ${errorText}`);
  }

  const result = await response.json();
  console.log('Delivery order created:', result);

  // Update the order with delivery tracking info
  if (result.delivery_id) {
    await supabase
      .from('orders')
      .update({ 
        status: 'processing',
        // You might want to add a delivery_id column to store this
      })
      .eq('id', order.id);
  }

  return result;
}

async function trackDelivery(orderId: string) {
  // Get delivery tracking info
  const response = await fetch(`https://api.deliforce.io/v1/orders/${orderId}/track`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${deliforceApiKey}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to track delivery: ${response.status} ${errorText}`);
  }

  return await response.json();
}
