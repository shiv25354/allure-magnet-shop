
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Refund Policy</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>30-Day Return Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>We offer a 30-day return policy from the date of purchase. To be eligible for a return, your item must be:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Unused and in the same condition that you received it</li>
              <li>In the original packaging</li>
              <li>Accompanied by the receipt or proof of purchase</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Refund Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Once we receive your item, we will inspect it and notify you of the status of your refund. If approved:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your refund will be processed within 5-7 business days</li>
              <li>A credit will automatically be applied to your original method of payment</li>
              <li>You will receive an email confirmation when the refund is processed</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Shipping Costs</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund unless the return is due to our error.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Exchanges</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We only replace items if they are defective or damaged. If you need to exchange an item, please contact us at returns@alluremagnetshop.com</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>If you have any questions about our refund policy, please contact us at support@alluremagnetshop.com</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RefundPolicy;
