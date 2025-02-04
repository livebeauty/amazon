'use client';

import Link from 'next/link';
import { CheckCircleIcon } from 'lucide-react';
import { Header } from '../components/header';

const SuccessPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <main className="max-w-screen-lg mx-auto p-4">
        <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md">
          <CheckCircleIcon className="text-green-500 w-16 h-16" />
          <h1 className="text-2xl font-bold mt-4 text-center">Thank you, your order has been confirmed</h1>
          <p className="text-gray-600 mt-2 text-center">Thank you for shopping with us. We will send confirmation once your item has been shipped.If you would like to check the status of your order, please press the link below</p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link href="/orders">
              <button className="px-6 py-3 font-semibold shadow-2xl text-xs md:text-xs bg-gradient-to-b from-yellow-200 to-yellow-400 border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">
                View Your Orders
              </button>
            </Link>
         
          </div>
        </div>
      </main>
    </div>
  );
};

export default SuccessPage;
