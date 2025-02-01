import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({ id, title, price, description, category, image, rating }) {
  const randomRating = rating ?? Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;
  const [finalRating, setFinalRating] = useState(randomRating);
  const [hasPrime, setHasPrime] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if it's client side

  useEffect(() => {
    setFinalRating(randomRating);
    setHasPrime(Math.random() < 0.5);
    setIsClient(true); // Mark as client side
  }, []);

  // Only render the part of the code with <svg> on the client side
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      {/* Category */}
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

      {/* Product Image */}
      <Image src={image} alt={title} width={200} height={200} className="object-contain" />

      {/* Product Details */}
      <h4 className="my-4">{title}</h4>

      {/* ⭐ Rating */}
      <div className="flex">
        {isClient &&
          Array(finalRating)
            .fill(0)
            .map((_, i) => (
              <StarIcon key={i} className="text-yellow-500 h-5" />
            ))}
      </div>

      {/* Short Description */}
      <p className="text-xs my-2 line-clamp-2">{description}</p>

      {/* Price */}
      <div className="mb-5 text-lg font-bold text-green-700">
        {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price)}
      </div>

      {/* Prime Delivery */}
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Prime-Logo-PNG-HD-Quality.png"
            alt="Prime"
            width={100}
            height={50}
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      {/* Add to Cart Button */}
      <button className="mt-auto p-2 text-xs md:text-xs bg-gradient-to-b from-yellow-200 to-yellow-400 border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">
        Add to Cart
      </button>
    </div>
  );
}
