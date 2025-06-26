
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useDeliforce = () => {
  const createDeliveryOrder = async (orderId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('deliforce-integration', {
        body: { orderId, action: 'create' }
      });

      if (error) {
        console.error('Error creating delivery order:', error);
        toast.error('Failed to schedule delivery');
        return null;
      }

      toast.success('Delivery scheduled successfully!');
      return data;
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to schedule delivery');
      return null;
    }
  };

  const trackDelivery = async (orderId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('deliforce-integration', {
        body: { orderId, action: 'track' }
      });

      if (error) {
        console.error('Error tracking delivery:', error);
        return null;
      }

      return data.data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  return {
    createDeliveryOrder,
    trackDelivery
  };
};
