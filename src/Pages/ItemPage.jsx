import React from 'react';
import { Link } from 'react-router-dom';
import shopData from '../Pages/ShopInput';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function ItemPage() {
    return (
        <div>
            <Navbar />
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10 p-4'>
                {shopData.map(item => (
                    <div key={item.id} className='flex flex-col p-4 bg-white rounded-lg shadow-lg'>
                        <img
                            src={item.image}
                            alt={item.name}
                            className='w-full h-64 object-cover rounded-t-lg'
                        />
                        <div className='flex flex-col items-center p-4'>
                            <h1 className='text-2xl font-bold mb-2'>{item.name}</h1>
                            <p className='text-gray-500 mb-4'>N{item.price}</p>
                            <Link to={`/item/${item.id}`} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ItemPage;
