
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Eye, ShoppingBag, Clock } from 'lucide-react';

const ScarcityNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const notifications = [
    {
      icon: <Eye className="h-4 w-4 text-orange-500" />,
      text: "🔥 5 people viewing this now",
      bgColor: "bg-orange-50 border-orange-200"
    },
    {
      icon: <ShoppingBag className="h-4 w-4 text-green-500" />,
      text: "✅ Just purchased in Delhi 2 mins ago",
      bgColor: "bg-green-50 border-green-200"
    },
    {
      icon: <Clock className="h-4 w-4 text-red-500" />,
      text: "Only 4 left in stock – order now!",
      bgColor: "bg-red-50 border-red-200"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  const currentMsg = notifications[currentNotification];

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-fade-in">
      <div
        className={`${currentMsg.bgColor} border-2 rounded-lg px-4 py-3 shadow-lg transition-all duration-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        <div className="flex items-center space-x-2">
          {currentMsg.icon}
          <span className="text-sm font-medium text-gray-800">
            {currentMsg.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScarcityNotifications;
