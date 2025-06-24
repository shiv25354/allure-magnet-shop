import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Camera, ThumbsUp, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState('recent');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    headline: '',
    text: '',
    verified: false
  });

  const reviews = [
    {
      id: 1,
      name: "Priya R.",
      location: "Bangalore",
      rating: 5,
      headline: "My Signature Scent Now!",
      text: "The fragrance is stunning and subtle. I wear it daily and get compliments all the time.",
      date: "March 16, 2025",
      helpful: 42,
      verified: true,
      images: ['/lovable-uploads/9a6dc92e-72cf-4cb8-9c06-104ac7288a06.png']
    },
    {
      id: 2,
      name: "Arjun M.",
      location: "Mumbai",
      rating: 5,
      headline: "Amazing Longevity",
      text: "Lasts all day without being overpowering. Perfect for office wear and evening events.",
      date: "March 12, 2025",
      helpful: 28,
      verified: true,
      images: []
    },
    {
      id: 3,
      name: "Sneha K.",
      location: "Delhi",
      rating: 4,
      headline: "Received So Many Compliments!",
      text: "Great quality and the scent is unique. Packaging was also very elegant.",
      date: "March 8, 2025",
      helpful: 15,
      verified: true,
      images: ['/lovable-uploads/c8c4a057-9ce1-47c2-9d41-e5ba85ec2dcb.png']
    }
  ];

  const highlightedReviews = [
    { title: "Best Scent for Everyday", count: 180 },
    { title: "Amazing Longevity", count: 142 },
    { title: "Received So Many Compliments!", count: 98 }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const handleSubmitReview = () => {
    toast.success("Review submitted! Thank you for your feedback.");
    setShowReviewForm(false);
    setNewReview({ name: '', rating: 5, headline: '', text: '', verified: false });
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">⭐ Customer Reviews</h2>
        <p className="text-xl text-gray-600 mb-6">Rated 4.8/5 by 1,280+ Happy Customers</p>
        
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="flex">
            {renderStars(5)}
          </div>
          <span className="text-lg font-semibold">4.8</span>
          <span className="text-gray-600">(1,280 reviews)</span>
        </div>
      </div>

      {/* Highlighted Reviews */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 text-center">💬 Top Picks</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {highlightedReviews.map((review, index) => (
            <Card key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="space-y-2">
                <h4 className="font-semibold text-gray-800">"{review.title}"</h4>
                <p className="text-sm text-gray-600">{review.count} customers mentioned this</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <Tabs defaultValue="recent" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
          <TabsTrigger value="recent">Most Recent</TabsTrigger>
          <TabsTrigger value="helpful">Most Helpful</TabsTrigger>
          <TabsTrigger value="highest">Highest Rating</TabsTrigger>
          <TabsTrigger value="lowest">Lowest Rating</TabsTrigger>
          <TabsTrigger value="photos">Photos Only</TabsTrigger>
          <TabsTrigger value="comments">With Comments</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-6 mt-8">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{review.name}</span>
                      {review.verified && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{review.location} • {review.date}</p>
                  </div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">"{review.headline}"</h4>
                  <p className="text-gray-700">{review.text}</p>
                </div>

                {review.images.length > 0 && (
                  <div className="flex space-x-2">
                    {review.images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt="Customer photo"
                        className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{review.helpful} found this helpful</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Other tab contents would show filtered reviews */}
        <TabsContent value="helpful" className="space-y-6 mt-8">
          <p className="text-center text-gray-600">Showing most helpful reviews...</p>
        </TabsContent>
        
        <TabsContent value="highest" className="space-y-6 mt-8">
          <p className="text-center text-gray-600">Showing highest rated reviews...</p>
        </TabsContent>
        
        <TabsContent value="lowest" className="space-y-6 mt-8">
          <p className="text-center text-gray-600">Showing lowest rated reviews...</p>
        </TabsContent>
        
        <TabsContent value="photos" className="space-y-6 mt-8">
          <p className="text-center text-gray-600">Showing reviews with photos...</p>
        </TabsContent>
        
        <TabsContent value="comments" className="space-y-6 mt-8">
          <p className="text-center text-gray-600">Showing reviews with detailed comments...</p>
        </TabsContent>
      </Tabs>

      {/* Leave a Review Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-12">
        <h3 className="text-2xl font-semibold text-center mb-6">Share Your Experience</h3>
        
        {!showReviewForm ? (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Help other customers by sharing your thoughts!</p>
            <Button 
              onClick={() => setShowReviewForm(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              📤 Write a Review
            </Button>
          </div>
        ) : (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Your name (optional)"
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
              />
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Rating:</span>
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 cursor-pointer ${
                        star <= newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                      onClick={() => setNewReview({...newReview, rating: star})}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Input
              placeholder="Review headline"
              value={newReview.headline}
              onChange={(e) => setNewReview({...newReview, headline: e.target.value})}
            />

            <Textarea
              placeholder="Tell us about your experience (max 500 characters)"
              value={newReview.text}
              onChange={(e) => setNewReview({...newReview, text: e.target.value})}
              maxLength={500}
            />

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>Upload Photos (Max 3)</span>
              </Button>
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={newReview.verified}
                  onChange={(e) => setNewReview({...newReview, verified: e.target.checked})}
                  className="rounded"
                />
                <span>✅ I am a verified buyer</span>
              </label>
            </div>

            <div className="flex space-x-4 justify-center">
              <Button
                variant="outline"
                onClick={() => setShowReviewForm(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitReview}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                📤 Submit My Review
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600">
              🎁 Get ₹100 off your next order after submitting your review!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
