import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Logo */}
        <div className="flex justify-start items-center mb-6">
          <Image
            src="https://links.papareact.com/f90"
            alt="Amazon Logo"
            width={120}
            height={30}
            className="mr-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div>
            <h5 className="text-lg font-bold mb-4">Get to Know Us</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Amazon</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Investor Relations</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-lg font-bold mb-4">Make Money with Us</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Sell on Amazon</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sell under Amazon Accelerator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Fulfillment by Amazon</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Advertise Your Products</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-lg font-bold mb-4">Amazon Payment Products</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Amazon Business Card</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shop with Points</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Reload Your Balance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Amazon Currency Converter</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h5 className="text-lg font-bold mb-4">Let Us Help You</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Your Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns & Replacements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Manage Your Content and Devices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-600 pt-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2025 Amazon.com, Inc. or its affiliates</p>
            <div className="space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Notice</a>
              <a href="#" className="text-gray-400 hover:text-white">Conditions of Use</a>
              <a href="#" className="text-gray-400 hover:text-white">Interest-Based Ads</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
