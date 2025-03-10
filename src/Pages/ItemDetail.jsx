// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import shopData from '../Pages/ShopInput';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaShoppingCart } from 'react-icons/fa';


// function ItemDetail({ cart, setCart }) {
//     const { id } = useParams();
//     const item = shopData.find(item => item.id === parseInt(id));

//     const [size, setSize] = useState('');

//     const handleSizeChange = (event) => {
//         setSize(event.target.value);
//     };

//     const handleAddToCart = () => {
//         if (size) {
//             setCart([...cart, { ...item, size }]);
//             setSize('');
//         } else {
//             alert('Please select a size before adding to cart.');
//         }
//     };

//     if (!item) {
//         return <p>Item not found.</p>;
//     }

//     return (
//         <div className='w-full relative'>
//             <Navbar />
//             <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto gap-10 mt-10 mb-10'>
//                 <img
//                     src={item.image}
//                     alt={item.name}
//                     className='w-[300px] md:ml-20 mx-auto'
//                 />
               
//                 <div className='flex flex-col items-center p-4 bg-white rounded-lg shadow-lg mx-auto mt-10 mb-10'>
//                     <h1 className='text-3xl md:text-4xl mt-8'>{item.name}</h1>
//                     <h1 className='text-gray-500 text-xl md:text-3xl font-medium mt-8'>{item.price}</h1>

//                     <h2 className="text-2xl mb-4 mt-8">Select Size</h2>
//                     <div className="flex mb-4">
//                         <label className="mr-4">
//                             <input
//                                 type="radio"
//                                 name="size"
//                                 value="L"
//                                 checked={size === 'L'}
//                                 onChange={handleSizeChange}
//                                 className="mr-2"
//                             />
//                             L
//                         </label>
//                         <label>
//                             <input
//                                 type="radio"
//                                 name="size"
//                                 value="XL"
//                                 checked={size === 'XL'}
//                                 onChange={handleSizeChange}
//                                 className="mr-2"
//                             />
//                             XL
//                         </label>
//                     </div>
//                     <button
//                         onClick={handleAddToCart}
//                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//                     >
//                         Add to Cart
//                     </button>

//                     <button className="px-4 py-2 bg-blue-500 mt-8 text-white rounded hover:bg-blue-700">
//                         Buy Now
//                     </button>
//                 </div>
//             </div>
//             <Link to='/cart'>
//                 <div className='fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-full'>
//                     <FaShoppingCart size={24} />
//                     {cart.length > 0 && (
//                         <div className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'>
//                             {cart.length}
//                         </div>
//                     )}
//                 </div>
//             </Link>
//             <Footer />
//         </div>
//     );
// }

// export default ItemDetail;









// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import shopData from '../Pages/ShopInput';
// import shortData from '../Pages/ShortSleeve';
// import shoeData from '../Pages/Shoe';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaShoppingCart } from 'react-icons/fa';

// // Combine all data into a single array
// const combinedData = [...shopData, ...shortData, ...shoeData];

// function ItemDetail({ cart, setCart }) {
//     const { id } = useParams();
//     const item = combinedData.find(item => item.id === parseInt(id));

//     const [size, setSize] = useState('');

//     const handleSizeChange = (event) => {
//         setSize(event.target.value);
//     };

//     const handleAddToCart = () => {
//         if (size) {
//             setCart([...cart, { ...item, size }]);
//             setSize('');
//         } else {
//             alert('Please select a size before adding to cart.');
//         }
//     };

//     if (!item) {
//         return <p>Item not found.</p>;
//     }

//     return (
//         <div className='w-full relative'>
//             <Navbar />
//             <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto gap-10 mt-10 mb-10'>
//                 <img
//                     src={item.image}
//                     alt={item.name}
//                     className='w-[300px] md:ml-20 mx-auto'
//                 />
               
//                 <div className='flex flex-col items-center p-4 bg-white rounded-lg shadow-lg mx-auto mt-10 mb-10'>
//                     <h1 className='text-3xl md:text-4xl mt-8'>{item.name}</h1>
//                     <h1 className='text-gray-500 text-xl md:text-3xl font-medium mt-8'>{item.price}</h1>

//                     <h2 className="text-2xl mb-4 mt-8">Select Size</h2>
//                     <div className="flex mb-4">
//                         {item.category === 'shoe' ? (
//                             <select
//                                 name="size"
//                                 value={size}
//                                 onChange={handleSizeChange}
//                                 className="mr-2"
//                             >
//                                 <option value="">Select Size</option>
//                                 {[...Array(8).keys()].map(n => (
//                                     <option key={n+4} value={`UK ${n+4}`}>{`UK ${n+4}`}</option>
//                                 ))}
//                             </select>
//                         ) : (
//                             <>
//                                 <label className="mr-4">
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="L"
//                                         checked={size === 'L'}
//                                         onChange={handleSizeChange}
//                                         className="mr-2"
//                                     />
//                                     L
//                                 </label>
//                                 <label>
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="XL"
//                                         checked={size === 'XL'}
//                                         onChange={handleSizeChange}
//                                         className="mr-2"
//                                     />
//                                     XL
//                                 </label>
//                             </>
//                         )}
//                     </div>
//                     <button
//                         onClick={handleAddToCart}
//                         className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-blue-500"
//                     >
//                         Add to Cart
//                     </button>
//                 <Link to='/cart'>
//                     <button className="px-4 py-2 bg-gray-800 mt-8 text-white rounded hover:bg-blue-500">
//                         Buy Now
//                     </button>
//                     </Link>
//                 </div>
//             </div>
//             <Link to='/cart'>
//                 <div className='fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-full'>
//                     <FaShoppingCart size={24} />
//                     {cart.length > 0 && (
//                         <div className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'>
//                             {cart.length}
//                         </div>
//                     )}
//                 </div>
//             </Link>
//             <Footer />
//         </div>
//     );
// }

// export default ItemDetail;






// import React, { useState } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import shopData from '../Pages/ShopInput';
// import shortData from '../Pages/ShortSleeve';
// import shoeData from '../Pages/Shoe';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaShoppingCart } from 'react-icons/fa';

// // Combine all data into a single array
// const combinedData = [...shopData, ...shortData, ...shoeData];

// function ItemDetail({ cart, setCart }) {
//     const { id } = useParams();
//     const item = combinedData.find(item => item.id === parseInt(id));
//     const navigate = useNavigate();

//     const [size, setSize] = useState('');

//     const handleSizeChange = (event) => {
//         setSize(event.target.value);
//     };

//     const handleAddToCart = () => {
//         if (size) {
//             setCart([...cart, { ...item, size }]);
//             setSize('');
//         } else {
//             alert('Please select a size before adding to cart.');
//         }
//     };

//     const handleBuyNow = () => {
//         if (size) {
//             setCart([...cart, { ...item, size }]);
//             navigate('/cart');
//         } else {
//             alert('Please select a size before buying.');
//         }
//     };

//     if (!item) {
//         return <p>Item not found.</p>;
//     }

//     return (
//         <div className='w-full relative'>
//             <Navbar />
//             <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto gap-10 mt-10 mb-10'>
//                 <img
//                     src={item.image}
//                     alt={item.name}
//                     className='w-[300px] md:ml-20 mx-auto'
//                 />
//                 <div className='flex flex-col items-center p-4 bg-white rounded-lg shadow-lg mx-auto mt-10 mb-10'>
//                     <h1 className='text-3xl md:text-4xl mt-8'>{item.name}</h1>
//                     <h1 className='text-gray-500 text-xl md:text-3xl font-medium mt-8'>{item.price}</h1>
//                     <h2 className="text-2xl mb-4 mt-8">Select Size</h2>
//                     <div className="flex mb-4">
//                         {item.category === 'shoe' ? (
//                             <select
//                                 name="size"
//                                 value={size}
//                                 onChange={handleSizeChange}
//                                 className="mr-2"
//                             >
//                                 <option value="">Select Size</option>
//                                 {[...Array(8).keys()].map(n => (
//                                     <option key={n+4} value={`UK ${n+4}`}>{`UK ${n+4}`}</option>
//                                 ))}
//                             </select>
//                         ) : (
//                             <>
//                                 <label className="mr-4">
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="L"
//                                         checked={size === 'L'}
//                                         onChange={handleSizeChange}
//                                         className="mr-2"
//                                     />
//                                     L
//                                 </label>
//                                 <label>
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="XL"
//                                         checked={size === 'XL'}
//                                         onChange={handleSizeChange}
//                                         className="mr-2"
//                                     />
//                                     XL
//                                 </label>
//                             </>
//                         )}
//                     </div>
//                     <button
//                         onClick={handleAddToCart}
//                         className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-blue-500"
//                     >
//                         Add to Cart
//                     </button>
//                     <button
//                         onClick={handleBuyNow}
//                         className="px-4 py-2 bg-gray-800 mt-8 text-white rounded hover:bg-blue-500"
//                     >
//                         Buy Now
//                     </button>
//                 </div>
//             </div>
//             <Link to='/cart'>
//                 <div className='fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-full'>
//                     <FaShoppingCart size={24} />
//                     {cart.length > 0 && (
//                         <div className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'>
//                             {cart.length}
//                         </div>
//                     )}
//                 </div>
//             </Link>
//             <Footer />
//         </div>
//     );
// }

// export default ItemDetail;















































import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import shopData from '../Pages/ShopInput';
import shortData from '../Pages/ShortSleeve';
import shoeData from '../Pages/Shoe';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaShoppingCart } from 'react-icons/fa';

// Combine all data into a single array
const combinedData = [...shopData, ...shortData, ...shoeData];

function ItemDetail({ cart, setCart }) {
    const { id } = useParams();
    const item = combinedData.find(item => item.id === parseInt(id));
    const navigate = useNavigate();

    const [size, setSize] = useState('');

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleAddToCart = () => {
        if (size) {
            setCart([...cart, { ...item, size }]);
            setSize('');
        } else {
            alert('Please select a size before adding to cart.');
        }
    };

    const handleBuyNow = () => {
        if (size) {
            setCart([...cart, { ...item, size }]);
            navigate('/cart');
        } else {
            alert('Please select a size before buying.');
        }
    };

    if (!item) {
        return <p>Item not found.</p>;
    }

    return (
        <div className='w-full relative'>
            <Navbar />
            <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto gap-10 mt-10 mb-10'>
                <img
                    src={item.image}
                    alt={item.name}
                    className='w-[300px] md:ml-20 mx-auto'
                />
                <div className='flex flex-col items-center p-4 bg-white rounded-lg shadow-lg mx-auto mt-10 mb-10'>
                    <h1 className='text-3xl md:text-4xl mt-8'>{item.name}</h1>
                    <h1 className='text-gray-500 text-xl md:text-3xl font-medium mt-8'>{item.price}</h1>
                    <h2 className="text-2xl mb-4 mt-8">Select Size</h2>
                    <div className="flex mb-4">
                        {item.category === 'shoe' ? (
                            <select
                                name="size"
                                value={size}
                                onChange={handleSizeChange}
                                className="mr-2"
                            >
                                <option value="">Select Size</option>
                                {[...Array(8).keys()].map(n => (
                                    <option key={n+4} value={`UK ${n+4}`}>{`UK ${n+4}`}</option>
                                ))}
                            </select>
                        ) : (
                            <>
                                <label className="mr-4">
                                    <input
                                        type="radio"
                                        name="size"
                                        value="L"
                                        checked={size === 'L'}
                                        onChange={handleSizeChange}
                                        className="mr-2"
                                    />
                                    L
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="size"
                                        value="XL"
                                        checked={size === 'XL'}
                                        onChange={handleSizeChange}
                                        className="mr-2"
                                    />
                                    XL
                                </label>
                            </>
                        )}
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-blue-500"
                    >
                        Add to Cart
                    </button>
                    <button
                        onClick={handleBuyNow}
                        className="px-4 py-2 bg-gray-800 mt-8 text-white rounded hover:bg-blue-500"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
            <Link to='/cart'>
                <div className='fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-full'>
                    <FaShoppingCart size={24} />
                    {cart.length > 0 && (
                        <div className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'>
                            {cart.length}
                        </div>
                    )}
                </div>
            </Link>
            <Footer />
        </div>
    );
}

export default ItemDetail;

