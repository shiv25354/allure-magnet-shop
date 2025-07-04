-- Add payment_gateway_data column to store payment gateway specific information
ALTER TABLE public.orders 
ADD COLUMN payment_gateway_data JSONB DEFAULT NULL;

-- Add payment_gateway_order_id to track external payment IDs
ALTER TABLE public.orders 
ADD COLUMN payment_gateway_order_id TEXT DEFAULT NULL;

-- Add payment_link_url for storing Cashfree payment links
ALTER TABLE public.orders 
ADD COLUMN payment_link_url TEXT DEFAULT NULL;