// import React from 'react';
// import { Link } from 'react-router-dom';

// const Cart = ({ cart, setCart }) => {
//     const handleRemoveItem = (index) => {
//         const newCart = cart.filter((_, i) => i !== index);
//         setCart(newCart);
//     };

//     const calculateSubtotal = () => {
//         return cart.reduce((total, item) => {
            
//             const priceString = item.price.replace(/[^0-9.-]+/g, '');
//             const price = parseFloat(priceString);
//             if (isNaN(price)) {
//                 console.warn(`Invalid price detected: ${item.price}`);
//                 return total;
//             }
//             return total + price;
//         }, 0);
//     };

    

//     return (
//         <div className='max-w-[1240px] mx-auto mt-10 mb-10 p-4'>
//             <h1 className='text-3xl md:text-5xl mb-6 text-center font-medium text-gray-800'>Your Cart</h1>
//             {cart.length === 0 ? (
//                 <p className='text-center font-medium text-xl'>Your cart is empty :(</p>
//             ) : (
//                 <div>
//                     {cart.map((item, index) => (
//                         <div key={index} className='flex justify-between items-center border-b py-4'>
//                             <div>
//                                 <img
//                                     src={item.image}
//                                     alt='img'
//                                     className='w-[150px]'
//                                 />
//                                 <h2 className='text-xl'>{item.name}</h2>
//                                 <p>Size: {item.size}</p>
//                                 <p>Price: {item.price}</p>
//                             </div>
//                             <button
//                                 onClick={() => handleRemoveItem(index)}
//                                 className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                     <div className='flex justify-end mt-6'>
//                         <h2 className='text-2xl'>Subtotal: N{calculateSubtotal().toFixed(2)}</h2>
//                     </div>
//                    <Link to=''> <h1 className='text-center items-center mx-auto cursor-pointer text-white bg-gray-800 rounded-lg tracking-wide p-2 hover:bg-green-500 font-medium text-xl mt-16 w-[300px]'>Proceed</h1> </Link>
//                 </div>
//             )}

//         </div>
//     );
// };

// export default Cart;





import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
    const navigate = useNavigate();

    const handleRemoveItem = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => {
            const priceString = item.price.replace(/[^0-9.-]+/g, '');
            const price = parseFloat(priceString);
            if (isNaN(price)) {
                console.warn(`Invalid price detected: ${item.price}`);
                return total;
            }
            return total + price;
        }, 0);
    };

    const proceedToPayment = () => {
        navigate('/paygate', { state: { cart } });
    };

    return (
        <div className='max-w-[1240px] mx-auto mt-10 mb-10 p-4'>
            <h1 className='text-3xl md:text-5xl mb-6 text-center font-medium text-gray-800'>Your Cart</h1>
            {cart.length === 0 ? (
                <p className='text-center font-medium text-xl'>Your cart is empty :(</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className='flex justify-between items-center border-b py-4'>
                            <div>
                                <img
                                    src={item.image}
                                    alt='img'
                                    className='w-[150px]'
                                />
                                <h2 className='text-xl'>{item.name}</h2>
                                <p>Size: {item.size}</p>
                                <p>Price: {item.price}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveItem(index)}
                                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className='flex justify-end mt-6'>
                        <h2 className='text-2xl'>Subtotal: N{calculateSubtotal().toFixed(2)}</h2>
                    </div>
                    <button
                        onClick={proceedToPayment}
                        className=' mx-auto flex justify-center cursor-pointer text-white bg-gray-800 rounded-lg tracking-wide p-2 hover:bg-green-500 font-medium text-xl mt-16 w-[200px] md:w-[300px]'
                    >
                        Proceed
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;


