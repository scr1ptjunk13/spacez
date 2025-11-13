import Image from 'next/image';

export default function TopNavBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      {/* Left side - Menu icon */}
      <button className="p-2">
        <Image
          src="/assets/menu.svg"
          alt="Menu"
          width={24}
          height={24}
        />
      </button>

      {/* Center - Logo */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/assets/logo.svg"
          alt="SPACEZ"
          width={114}
          height={24}
          priority
        />
      </div>

      {/* Right side - Time and status icons */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">9:30</span>
        <div className="flex space-x-1">
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
}
