import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'
import Currency  from "react-currency-formatter"

export default function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {

    const dispatch = useDispatch()


    const addItemToBasket = () => {
      const product = {id,title,price,description,category,image,rating,hasPrime}
      dispatch(addToBasket(product))}

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }
  return (
    <div className='grid grid-cols-5'>
      <Image src={image} height={200} width={200} className='object-contain'/>

         {/* Middle */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
       <div className='flex'>
        {Array(rating) 
          .fill()
          .map((_, i) => (
             <StarIcon key={i} className='h-5 text-yellow-500'/>
           ))}
       </div>

       <p className='text-xs my-2 line-clamp-3'>{description}</p>
       <Currency quantity={price} currency='USD'/>

       {hasPrime && (
        <div className="flex items-center space-x-2">
        <Image
          loading='lazy'
          src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Prime-Logo-PNG-HD-Quality.png"
          alt="Prime"
          width={100}
          height={50}
        />
        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
        )}
      </div>
 

       {/* Right Add/remove button */}
       <div className='flex flex-col space-y-2 my-auto justify-self-end'>
         <button
         onClick={addItemToBasket}
         className="mt-auto p-2 text-xs md:text-xs bg-gradient-to-b from-yellow-200
          to-yellow-400 border-yellow-300 rounded-sm focus:outline-none focus:ring-2 
          focus:ring-yellow-500 active:from-yellow-500">
        Add to Cart
        </button>

        <button
        onClick={removeItemFromBasket}
         className="mt-auto p-2 text-xs md:text-xs bg-gradient-to-b from-yellow-200
          to-yellow-400 border-yellow-300 rounded-sm focus:outline-none focus:ring-2 
          focus:ring-yellow-500 active:from-yellow-500">
        Remove from Basket
        </button>
       </div>
    
    </div>
  )
}
