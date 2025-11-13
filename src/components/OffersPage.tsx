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
    <div 
      className="flex bg-white rounded-lg shadow-sm border border-gray-200 mb-4 overflow-hidden opacity-100"
      style={{
        width: '345px',
        height: '184px'
      }}
    >
      {/* Discount Section */}
      <div 
        className="flex flex-col justify-center items-center text-white opacity-100"
        style={{
          width: '68px',
          height: '184px',
          background: 'var(--colour-semantic-background-surface-background-surface-brown-prominent, #C16B3E)',
          borderRightWidth: 'var(--border-25, 1px)',
          paddingTop: 'var(--padding-500, 16px)',
          paddingRight: 'var(--padding-300, 8px)',
          paddingBottom: 'var(--padding-500, 16px)',
          paddingLeft: 'var(--padding-300, 8px)',
          gap: '16px'
        }}
      >
        <div className="text-2xl font-bold transform -rotate-90 whitespace-nowrap">
          {discount}
        </div>
      </div>

      {/* Coupon Section - Right side content */}
      <div className="flex-1" style={{ padding: '16px' }}>
        {/* Frame 1000005312 - Header with title and copy button */}
        <div 
          className="flex justify-between items-start opacity-100"
          style={{
            width: '241px',
            height: '30px',
            paddingRight: 'var(--padding-150, 6px)'
          }}
        >
          {/* Frame 1000005314 - Title container */}
          <div 
            className="flex items-center opacity-100"
            style={{
              width: '99px',
              height: '24px',
              gap: '8px'
            }}
          >
            {/* LONGSTAY Title */}
            <h3 
              className="opacity-100"
              style={{
                color: 'var(--colour-semantic-text-text, #4B4E4B)',
                fontSize: '18px', // heading M size
                fontWeight: '600', // SemiBold
                lineHeight: '24px', // heading M line-height
                letterSpacing: '0px', // heading M letter-spacing
                verticalAlign: 'middle'
              }}
            >
              {title}
            </h3>
          </div>

          {/* Copy Button */}
          <button 
            onClick={handleCopy}
            className="flex items-center opacity-100"
            style={{
              width: '80px',
              height: '30px',
              minWidth: '80px',
              borderRadius: 'var(--corner-small, 4px)',
              borderWidth: 'var(--border-16, 1px)',
              borderStyle: 'solid',
              borderColor: 'var(--colour-semantic-text-text-brand, #874B2C)',
              paddingTop: 'var(--padding-100, 4px)',
              paddingBottom: 'var(--padding-100, 4px)',
              gap: '6px',
              backgroundColor: 'transparent',
              justifyContent: 'center'
            }}
          >
            {/* Copy Icon */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_571_243" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                <rect width="18" height="18" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_571_243)">
                <path d="M6.96204 13.6875C6.44916 13.6875 6.01373 13.5085 5.65573 13.1505C5.29773 12.7925 5.11873 12.3571 5.11873 11.8442V3.15581C5.11873 2.64294 5.29773 2.2075 5.65573 1.8495C6.01373 1.4915 6.44916 1.3125 6.96204 1.3125H13.4004C13.9133 1.3125 14.3487 1.4915 14.7067 1.8495C15.0647 2.2075 15.2437 2.64294 15.2437 3.15581V11.8442C15.2437 12.3571 15.0647 12.7925 14.7067 13.1505C14.3487 13.5085 13.9133 13.6875 13.4004 13.6875H6.96204ZM6.96204 12.075H13.4004C13.4582 12.075 13.511 12.0509 13.559 12.0028C13.6072 11.9548 13.6312 11.9019 13.6312 11.8442V3.15581C13.6312 3.09806 13.6072 3.04519 13.559 2.99719C13.511 2.94906 13.4582 2.925 13.4004 2.925H6.96204C6.90429 2.925 6.85141 2.94906 6.80341 2.99719C6.75529 3.04519 6.73123 3.09806 6.73123 3.15581V11.8442C6.73123 11.9019 6.75529 11.9548 6.80341 12.0028C6.85141 12.0509 6.90429 12.075 6.96204 12.075ZM3.84954 16.8C3.33666 16.8 2.90123 16.621 2.54323 16.263C2.18523 15.905 2.00623 15.4696 2.00623 14.9567V4.65581H3.61873V14.9567C3.61873 15.0144 3.64279 15.0673 3.69091 15.1153C3.73891 15.1634 3.79179 15.1875 3.84954 15.1875H11.9004V16.8H3.84954Z" fill="#9A5632"/>
              </g>
            </svg>
            {/* Copy Label */}
            <span 
              style={{
                color: 'var(--colour-semantic-text-text-brand, #874B2C)',
                fontSize: '16px', // heading S size
                fontWeight: '500', // Medium
                lineHeight: '22px',
                letterSpacing: '0px' // heading S letter-spacing
              }}
            >
              Copy
            </span>
          </button>
        </div>

        {/* Description Text */}
        <p 
          className="opacity-100"
          style={{
            color: 'var(--colour-semantic-text-text-secondary, #7D817D)',
            fontSize: '14px', // body S size
            fontWeight: '400', // Regular
            lineHeight: '20px', // body S line-height
            letterSpacing: '0px', // body S letter-spacing
            verticalAlign: 'middle',
            marginTop: '12px',
            marginBottom: '12px'
          }}
        >
          {description}
        </p>

        {/* Divider Line */}
        <div 
          className="opacity-100"
          style={{
            width: '241px',
            height: '0px',
            borderTop: '1px solid var(--colour-semantic-border, #E5E6E5)',
            marginBottom: '12px'
          }}
        />

        {/* Read More Button */}
        <button 
          className="opacity-100"
          style={{
            width: '80px',
            height: '28px',
            minWidth: '80px',
            minHeight: '24px',
            borderRadius: 'var(--corner-small, 4px)',
            borderWidth: 'var(--border-16, 1px)',
            borderStyle: 'solid',
            borderColor: 'transparent',
            paddingTop: 'var(--padding-100, 4px)',
            paddingRight: 'var(--padding-0, 0px)',
            paddingBottom: 'var(--padding-100, 4px)',
            paddingLeft: 'var(--padding-0, 0px)',
            gap: '6px',
            backgroundColor: 'transparent',
            color: 'var(--colour-semantic-text-text-secondary, #7D817D)',
            fontSize: '14px',
            fontWeight: '400'
          }}
        >
          Read more
        </button>
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
          <h1 
            className="font-semibold mb-2 opacity-100"
            style={{
              width: '345px',
              height: '28px',
              color: '#4B4E4B',
              fontSize: '24px', // heading L size
              fontWeight: '600', // SemiBold
              lineHeight: '28px', // heading L line-height
              letterSpacing: '0px', // heading L letter-spacing
              verticalAlign: 'middle'
            }}
          >
            Offers
          </h1>
          
          {/* Sign In Section */}
          {!isSignedIn ? (
            <div 
              className="bg-white rounded-lg mb-6 shadow-sm opacity-100"
              style={{
                width: '393px',
                height: '104px',
                paddingTop: '16px', // Size/Lowvalue/9
                paddingRight: '24px', // padding/600
                paddingBottom: '16px', // Size/Lowvalue/9
                paddingLeft: '24px', // padding/600
                gap: '12px'
              }}
            >
              <div 
                className="opacity-100"
                style={{
                  width: '345px',
                  height: '72px',
                  gap: '12px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <p 
                  className="opacity-100"
                  style={{
                    width: '345px',
                    height: '20px',
                    color: '#4B4E4B',
                    fontSize: '14px', // body S size
                    fontWeight: '400', // Regular
                    lineHeight: '20px', // body S line-height
                    letterSpacing: '0px', // body S letter-spacing
                    verticalAlign: 'middle'
                  }}
                >
                  Sign in to unlock exclusive additional rewards
                </p>
                <button 
                  onClick={() => setIsSignedIn(true)}
                  className="opacity-100"
                  style={{ 
                    width: '345px', 
                    height: '40px',
                    backgroundColor: '#C16B3E',
                    color: '#FFFFFF',
                    borderRadius: '4px',
                    paddingTop: '8px',
                    paddingRight: '16px', 
                    paddingBottom: '8px',
                    paddingLeft: '16px',
                    gap: '6px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  Sign in
                </button>
              </div>
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
          <h2 
            className="mb-4 opacity-100"
            style={{
              width: '345px',
              height: '22px',
              color: 'var(--colour-semantic-text-text, #4B4E4B)',
              fontSize: '16px', // heading S size
              fontWeight: '500', // Medium
              lineHeight: '22px',
              letterSpacing: '0px', // heading S letter-spacing
              verticalAlign: 'bottom'
            }}
          >
            Sitewide coupons:
          </h2>
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
