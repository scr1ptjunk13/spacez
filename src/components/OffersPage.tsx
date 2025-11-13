import { useState, useEffect, useRef } from 'react';

interface CouponProps {
  code: string;
  title: string;
  description: string;
  discount: string;
  color: string;
}

function CouponCard({ code, title, description, discount, color }: CouponProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    // You can add a toast notification here
  };

  return (
    <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 mb-4 overflow-hidden">
      {/* Left side - Discount */}
      <div className={`${color} text-white p-4 flex flex-col justify-center items-center min-w-[80px]`}>
        <div className="text-2xl font-bold transform -rotate-90 whitespace-nowrap">
          {discount}
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
          <button 
            onClick={handleCopy}
            className="flex items-center text-orange-600 text-sm font-medium"
          >
            📋 Copy
          </button>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <button className="text-gray-500 text-sm">Read more</button>
      </div>
    </div>
  );
}

interface BrandOfferProps {
  brand: string;
  logo: string;
  description: string;
  discount: string;
  color: string;
  logoColor?: string;
}

function BrandOfferCard({ brand, logo, description, discount, color, logoColor = 'white' }: BrandOfferProps) {
  return (
    <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 mb-4 overflow-hidden">
      {/* Left side - Discount */}
      <div className={`${color} text-white p-4 flex flex-col justify-center items-center min-w-[80px]`}>
        <div className="text-2xl font-bold transform -rotate-90 whitespace-nowrap">
          {discount}
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 ${logoColor === 'white' ? 'bg-white' : logoColor} rounded flex items-center justify-center`}>
              <span className="text-xs font-bold">{logo}</span>
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">{brand}</h3>
          </div>
          <button className="text-orange-600 text-sm font-medium px-4 py-1 border border-orange-600 rounded">
            Collect
          </button>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <button className="text-gray-500 text-sm">Read more</button>
      </div>
    </div>
  );
}

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState('Coupons');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const couponsRef = useRef<HTMLDivElement>(null);
  const giftcardsRef = useRef<HTMLDivElement>(null);
  const paymentRef = useRef<HTMLDivElement>(null);

  const coupons = [
    {
      code: 'LONGSTAY',
      title: 'LONGSTAY',
      description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      discount: '₹1,500',
      color: 'bg-orange-600'
    },
    {
      code: 'EARLYBIRD',
      title: 'EARLYBIRD', 
      description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      discount: '₹3,000',
      color: 'bg-orange-600'
    },
    {
      code: 'RUSHDEAL',
      title: 'RUSHDEAL',
      description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      discount: 'Flat 10%',
      color: 'bg-orange-600'
    }
  ];

  const giftCardOffers = [
    {
      brand: 'MYNTRA',
      logo: 'M',
      description: 'Get this gift voucher on booking above ₹2000',
      discount: '₹1500',
      color: 'bg-pink-500',
      logoColor: 'bg-pink-100'
    },
    {
      brand: 'HAMMER',
      logo: 'H',
      description: 'Get this gift voucher on booking above ₹1500',
      discount: '₹1000',
      color: 'bg-black',
      logoColor: 'bg-gray-800'
    }
  ];

  const paymentOffers = [
    {
      brand: 'HDFC BANK',
      logo: 'H',
      description: 'Get 10% off on booking above ₹1500',
      discount: '10% OFF',
      color: 'bg-blue-600',
      logoColor: 'bg-red-600'
    }
  ];

  // Scroll detection to highlight active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 280; // Offset for both nav bars
      
      if (couponsRef.current && giftcardsRef.current && paymentRef.current) {
        const couponsTop = couponsRef.current.offsetTop;
        const giftcardsTop = giftcardsRef.current.offsetTop;
        const paymentTop = paymentRef.current.offsetTop;
        
        if (scrollPosition >= paymentTop) {
          setActiveTab('Payment Offers');
        } else if (scrollPosition >= giftcardsTop) {
          setActiveTab('Giftcards');
        } else {
          setActiveTab('Coupons');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (tab: string) => {
    let targetRef;
    switch (tab) {
      case 'Coupons':
        targetRef = couponsRef;
        break;
      case 'Giftcards':
        targetRef = giftcardsRef;
        break;
      case 'Payment Offers':
        targetRef = paymentRef;
        break;
      default:
        return;
    }
    
    if (targetRef.current) {
      const headerHeight = 280; // Height of both sticky headers
      const targetPosition = targetRef.current.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-16 bg-gray-50 z-10 border-b border-gray-200">
        <div className="px-4 py-6">
          {/* Offers Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Offers</h1>
          
          {/* Sign In Section */}
          {!isSignedIn ? (
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
              <p className="text-gray-600 mb-4">Sign in to unlock exclusive additional rewards</p>
              <button 
                onClick={() => setIsSignedIn(true)}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium"
              >
                Sign In
              </button>
            </div>
          ) : (
            <div className="mb-6">
              <p className="text-gray-600 text-sm">Book directly with us to get exclusive benefits</p>
            </div>
          )}

          {/* Tabs */}
          <div className="flex">
            {['Coupons', 'Giftcards', 'Payment Offers'].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`flex-1 py-2 text-center text-sm font-medium ${
                  activeTab === tab
                    ? 'text-gray-800 border-b-2 border-gray-800'
                    : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="px-4 py-6 pb-24">
        {/* Sitewide Coupons */}
        <div ref={couponsRef} className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Sitewide coupons:</h2>
          {coupons.map((coupon, index) => (
            <CouponCard key={index} {...coupon} />
          ))}
        </div>

        {/* Bonus Gift Cards */}
        <div ref={giftcardsRef} className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Bonus gift cards:</h2>
          {isSignedIn ? (
            <div>
              <p className="text-sm text-gray-600 mb-4">Collect multiple of these</p>
              {giftCardOffers.map((offer, index) => (
                <BrandOfferCard key={index} {...offer} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">Assured vouchers up to</p>
                  <p className="text-2xl font-bold text-gray-800">₹1000 ✨</p>
                  <p className="text-sm text-gray-600">of trending brands</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm font-bold">
                    ₹400
                  </div>
                  <div className="bg-blue-600 text-white px-3 py-2 rounded text-sm">
                    ₹500<br />
                    <span className="text-xs">Gift card</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium">
                Claim gift cards »
              </button>
            </div>
          )}
        </div>

        {/* Payment Offers */}
        <div ref={paymentRef} className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment offers:</h2>
          {isSignedIn ? (
            <div>
              {paymentOffers.map((offer, index) => (
                <BrandOfferCard key={index} {...offer} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">Save more on your bookings</p>
                  <p className="text-2xl font-bold text-orange-600">upto 15% Off</p>
                  <p className="text-sm text-gray-600">on select payment methods</p>
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">QR</span>
                </div>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium">
                Unlock offers »
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
