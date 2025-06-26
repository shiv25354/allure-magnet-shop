
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, MapPin, Clock } from 'lucide-react';
import { useDeliforce } from '@/hooks/useDeliforce';

interface DeliveryTrackerProps {
  orderId: string;
}

const DeliveryTracker = ({ orderId }: DeliveryTrackerProps) => {
  const [deliveryInfo, setDeliveryInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { trackDelivery } = useDeliforce();

  const handleTrackDelivery = async () => {
    setIsLoading(true);
    const info = await trackDelivery(orderId);
    if (info) {
      setDeliveryInfo(info);
    }
    setIsLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'bg-yellow-500';
      case 'picked_up': return 'bg-blue-500';
      case 'in_transit': return 'bg-purple-500';
      case 'delivered': return 'bg-green-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Truck className="h-5 w-5" />
          <span>Delivery Tracking</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={handleTrackDelivery}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Tracking...' : 'Track Delivery'}
        </Button>

        {deliveryInfo && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">Status:</span>
              <Badge className={getStatusColor(deliveryInfo.status)}>
                {deliveryInfo.status}
              </Badge>
            </div>
            
            {deliveryInfo.estimated_delivery && (
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  Est. Delivery: {new Date(deliveryInfo.estimated_delivery).toLocaleString()}
                </span>
              </div>
            )}
            
            {deliveryInfo.current_location && (
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  Current Location: {deliveryInfo.current_location.address}
                </span>
              </div>
            )}

            {deliveryInfo.delivery_agent && (
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Delivery Agent</p>
                <p className="text-sm">{deliveryInfo.delivery_agent.name}</p>
                <p className="text-sm text-gray-600">{deliveryInfo.delivery_agent.phone}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DeliveryTracker;
