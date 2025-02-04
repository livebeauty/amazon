import React from "react";
import Image from "next/image";
import moment from "moment";
import Currency  from "react-currency-formatter"
export default function Order({ id, amount, items, timestamp, images }) {
  return (
    <div className="relative border rounded-lg">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p className="font-semibold">{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>

        <div>
          <p className="text-xs font-bold text-gray-600">TOTAL</p>
          <p className="font-semibold">
            <Currency quantity={amount} currency="USD"/> - Next Day Delivery{" "}
            
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500"
        >{items.length} items</p>

        <p className="text-sm text-gray-600 truncate">ORDER ID: {id}</p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
        {images.map((img, index) => (
          <Image key={index} src={img} alt="Product Image" width={100} height={100} className="object-contain sm:h-32" />
        ))}
        </div>
      </div>
    </div>
  );
}
