import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import shopData from './ShopInput';
import { Link } from 'react-router-dom';
import shortData from './ShortSleeve';
import shoeData from './Shoe';
import Footer from '../Components/Footer';

function Shop() {
  const longRef = useRef(null);
  const shortRef = useRef(null);
  const shoeRef = useRef(null);

  const scrollToLong = () => {
    longRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToShort = () => {
    shortRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToShoe = () => {
    shoeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full'>
      <Navbar />
      <div className='p-4 gap-5 flex justify-around'>
        <button onClick={scrollToLong} className=' md:p-3 p-2 border-black border hover:bg-gray-500 hover:text-white font-medium md:text-xl'>
          L.SLEEVE WEARS
        </button>

        <button onClick={scrollToShort} className='md:p-3 p-2 border border-black hover:bg-gray-500 hover:text-white font-medium md:text-xl'>
          S.SLEEVE WEARS
        </button>

        <button onClick={scrollToShoe} className=' md:p-3 p-2 border-black border hover:bg-gray-500 hover:text-white font-medium md:text-xl'>
          FOOTWEARS
        </button>
      </div>

      <h1 ref={longRef} className='text-gray-800 text-3xl text-center font-medium mt-10'>Long Sleeved Native Wears</h1>
      <div className="relative p-6"> 
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-0.5 bg-gray-800 w-12 mx-auto mb-1"></div> 
          <div className="h-0.5 bg-gray-800 w-[200px] md:w-[400px] mx-auto mb-2"></div>
          <div className="h-0.5 bg-gray-800 w-12 mx-auto"></div>
        </div>
      </div>

      <div className='max-w-[1240px] mt-[50px] md:mt-[50px] gap-5 mx-auto grid grid-cols-2 md:grid-cols-5 p-3'>
        {shopData.map((item, id) => (
          <div key={id} className='flex flex-col p-2'>
            <Link to={`/item/${item.id}`}>
              <div className='hover:underline'>
                <img src={item.image} alt='/img' className='rounded-md' />
                <h1 className='mt-3 mb-3 text-center font-semibold hover:underline'>{item.name}</h1>
              </div>
              <h1 className='text-gray-600 text-center font-bold'>{item.price}</h1>
            </Link>
          </div>
        ))}
      </div>

      <h1 ref={shortRef} className='text-gray-800 text-3xl text-center font-medium mt-10'>Short Sleeved Native Wears</h1>
      <div className="relative p-6"> 
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-0.5 bg-gray-800 w-12 mx-auto mb-1"></div>
          <div className="h-0.5 bg-gray-800 w-[200px] md:w-[400px] mx-auto mb-2"></div>
          <div className="h-0.5 bg-gray-800 w-12 mx-auto"></div>
        </div>
      </div>

      <div className='max-w-[1240px] mt-[50px] md:mt-[50px] gap-5 mx-auto grid grid-cols-2 md:grid-cols-5 p-3'>
        {shortData.map((item, id) => (
          <div key={id} className='flex flex-col p-2'>
            <Link to={`/item/${item.id}`}>
              <div className='hover:underline'>
                <img src={item.image} alt='/img' className='rounded-md' />
                <h1 className='mt-3 mb-3 text-center font-semibold hover:underline'>{item.name}</h1>
              </div>
              <h1 className='text-gray-600 text-center font-bold'>{item.price}</h1>
            </Link>
          </div>
        ))}
      </div>

      <h1 ref={shoeRef} className='text-gray-800 text-3xl text-center font-medium mt-10'>FootWears</h1>
      <div className="relative p-6"> 
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-0.5 bg-gray-800 w-12 mx-auto mb-1"></div>
          <div className="h-0.5 bg-gray-800 w-[200px] md:w-[400px] mx-auto mb-2"></div>
          <div className="h-0.5 bg-gray-800 w-12 mx-auto"></div>
        </div>
      </div>

      <div className='max-w-[1240px] mt-[50px] md:mt-[50px] gap-5 mx-auto grid grid-cols-2 md:grid-cols-5 p-3 mb-10'>
        {shoeData.map((item, id) => (
          <div key={id} className='flex flex-col p-2'>
            <Link to={`/item/${item.id}`}>
              <div className='hover:underline'>
                <img src={item.image} alt='/img' className='rounded-md' />
                <h1 className='mt-3 mb-3 text-center font-semibold hover:underline'>{item.name}</h1>
              </div>
              <h1 className='text-gray-600 text-center font-bold'>{item.price}</h1>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
