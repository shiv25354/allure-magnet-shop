
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Disclaimers = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Disclaimers</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>General Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this company excludes all representations, warranties, conditions and terms.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>We strive to provide accurate product information, however:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Product colors may vary slightly from what appears on your screen</li>
              <li>Product specifications are subject to change without notice</li>
              <li>Images are for illustration purposes only</li>
              <li>We cannot guarantee availability of all products</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p>In no event shall Allure Magnet Shop be liable for any direct, indirect, punitive, incidental, special consequential damages, or any damages whatsoever arising out of or connected with the use of this website.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>External Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our website may contain links to external sites. We are not responsible for the content or privacy practices of these external websites.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Health and Safety</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Magnetic products are not suitable for everyone:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Keep away from pacemakers and electronic medical devices</li>
              <li>Not suitable for children under 14 years</li>
              <li>Consult your doctor if you have medical concerns</li>
              <li>Magnets can pinch fingers - handle with care</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Changes to Disclaimers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We reserve the right to modify these disclaimers at any time. Changes will be effective immediately upon posting on this website.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Disclaimers;
