import React from 'react'
import { Header } from '../components/header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Currency  from "react-currency-formatter"
import { useSession } from 'next-auth/react'

export default function checkout() {
  const items = useSelector(selectItems)
  const { data: session } = useSession();
  const total = useSelector(selectTotal)

  return (
    <div className='bg-gray-100'>
        <Header/>
     <main className='lg:flex max-w-screen-2xl mx-auto'>
    {/* left */}
    <div className='flex-grow m-5 shadow-sm'>
        <Image
        src="https://links.papareact.com/ikj"
        width={1020}
        height={250}
        className='object-contain'
        />

        <div className='flex flex-col p-5 space-y-10 bg-white'>
          <h1 className='text-3xl border-b pb-4'>
            {items.length === 0 ? 'Your amazon basket is empty' : 'Shopping Basket'}
          </h1>

          {items.map((item, i) => (
            <CheckoutProduct
            key={i}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            description={item.description}
            category={item.category}
            hasPrime={item.hasPrime}
            image={item.image}
            />
          ))}
        </div>
    </div>
    {/* right */}
    <div>
     {items.length > 0 && (
       <>
         <h2 className='whitespace-nowrap'>
           Subtotal ({items.length} items:{" "})
           <span className='font-bold'>
           <Currency quantity={total} currency='USD'/>
           </span>
         </h2>

         <button
         disabled={!session}
         className={`p-2 text-xs md:text-xs bg-gradient-to-b from-yellow-200 to-yellow-400 border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}
         >
         {!session ? "Sign in to checkout" : "Proceed to checkout"}
         </button>
       </>
     )}
    </div>
     </main>
    </div>
  )
}
