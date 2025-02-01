import Image from 'next/image';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/20/solid';

export const Header = () => {
  return (
    <header className="bg-[#131921]">
      {/* Top nav */}
      <div className="flex items-center p-1 flex-grow py-2">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt="Amazon Logo"
            style={{ objectFit: "contain" }}
            className="cursor-pointer"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow bg-white flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            placeholder="Search product..."
          />
          <MagnifyingGlassIcon className="h-12 p-4 text-black" />
        </div>

        {/* Right Side */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {/* Account */}
          <div className="cursor-pointer hover:underline">
            <p>Hello, Suryansh</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          {/* Orders */}
          <div className="cursor-pointer hover:underline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          {/* Basket */}
          <div className="relative flex items-center cursor-pointer hover:underline">
            <span className="absolute -top-1 right-0 md:right-9 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">4</span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom nav (Add links if needed) */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-[#232F3E] text-white text-sm">
        <p className="cursor-pointer hover:underline flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
          </p>
        <p className="cursor-pointer hover:underline">Prime Video</p>
        <p className="cursor-pointer hover:underline">Amazon Business</p>
        <p className="cursor-pointer hover:underline">Today's Deals</p>
        <p className="cursor-pointer hover:underline">Electronics</p>
        <p className="cursor-pointer hover:underline">Food & Grocery</p>
        <p className="cursor-pointer hover:underline">Prime</p>
        <p className="cursor-pointer hover:underline">Buy Again</p>
        <p className="cursor-pointer hover:underline">Shopper Toolkit</p>
        <p className="cursor-pointer hover:underline">Health & Personal Care</p>
      </div>
    </header>
  );
};
