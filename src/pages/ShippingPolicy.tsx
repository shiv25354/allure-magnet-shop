
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Shipping Policy</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Shipping Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">Standard Shipping</h4>
              <p className="text-gray-600">3-5 business days - Free on orders over $50</p>
            </div>
            <div>
              <h4 className="font-semibold">Express Shipping</h4>
              <p className="text-gray-600">1-2 business days - $15.99</p>
            </div>
            <div>
              <h4 className="font-semibold">Overnight Shipping</h4>
              <p className="text-gray-600">Next business day - $24.99</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Processing Time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.</p>
            <p>If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Shipping Locations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>We currently ship to addresses within India only. We do not ship to PO boxes.</p>
            <div>
              <h4 className="font-semibold">Covered Areas:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                <li>All major cities and towns</li>
                <li>Rural areas (additional 1-2 days)</li>
                <li>Remote locations (may require additional shipping charges)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Shipping Costs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Shipping charges are calculated based on the weight and destination of your order.</p>
            <div>
              <h4 className="font-semibold">Free Shipping:</h4>
              <p className="text-gray-600">Orders over ₹2000 qualify for free standard shipping</p>
            </div>
            <div>
              <h4 className="font-semibold">Standard Rates:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                <li>Orders under ₹500: ₹99</li>
                <li>Orders ₹500-₹1999: ₹149</li>
                <li>Orders ₹2000+: Free</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Order Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Once your order has shipped, you will receive an email with tracking information. You can track your package using the tracking number provided.</p>
            <p>If you have any questions about your shipment, please contact us at shipping@alluremagnetshop.com</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Damaged or Lost Packages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>If your order arrives damaged or goes missing during transit, please contact us immediately at support@alluremagnetshop.com</p>
            <p>We will work with the shipping carrier to resolve the issue and ensure you receive your order or a full refund.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Special Handling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Due to the magnetic nature of our products, special handling procedures are followed:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
              <li>Products are securely packaged to prevent damage</li>
              <li>Magnetic shields are used where necessary</li>
              <li>Fragile items receive extra protective packaging</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShippingPolicy;
