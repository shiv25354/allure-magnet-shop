
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Allure Magnet Shop</h3>
            <p className="text-gray-400 text-sm mb-2">
              Premium magnetic products for health, wellness, and everyday use.
            </p>
            <p className="text-gray-400 text-sm">
              Located in Chhattisgarh, Raipur
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact-us" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><a href="mailto:returns@alluremagnetshop.com" className="text-gray-400 hover:text-white">Returns</a></li>
              <li><span className="text-gray-400">1-800-MAGNETS</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/checkout" className="text-gray-400 hover:text-white">Checkout</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="text-gray-400 hover:text-white">Refund Policy</Link></li>
              <li><Link to="/disclaimers" className="text-gray-400 hover:text-white">Disclaimers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Allure Magnet Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
