// import React, { useState } from 'react';
// import { PaystackButton } from 'react-paystack';

// const PaymentGateway = ({ cart }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//     const publicKey = 'pk_test_c6bee9ded77c2f304cfec1423b5461c545a77ab9';
//     const amount = cart.reduce((total, item) => {
//         const priceString = item.price.replace(/[^0-9.-]+/g, '');
//         const price = parseFloat(priceString);
//         if (isNaN(price)) {
//             console.warn(`Invalid price detected: ${item.price}`);
//             return total;
//         }
//         return total + price;
//     }, 0) * 100; // Paystack amount is in kobo, hence the multiplication by 100

//     const componentProps = {
//         email,
//         amount,
//         metadata: {
//             name,
//             cart,
//         },
//         publicKey,
//         text: "Pay Now",
//         onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
//         onClose: () => alert("Wait! Don't leave :("),
//     };

//     return (
//         <div className='max-w-[1240px] mx-auto mt-10 mb-10 p-4'>
//             <h1 className='text-3xl md:text-5xl mb-6 text-center font-medium text-gray-800'>Payment Details</h1>
//             <form className='max-w-[600px] mx-auto'>
//                 <div className='mb-4'>
//                     <label className='block text-gray-700'>Name</label>
//                     <input
//                         type='text'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className='w-full p-2 border border-gray-300 rounded'
//                     />
//                 </div>
//                 <div className='mb-4'>
//                     <label className='block text-gray-700'>Email</label>
//                     <input
//                         type='email'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className='w-full p-2 border border-gray-300 rounded'
//                     />
//                 </div>
//                 <div className='mb-4'>
//                     <label className='block text-gray-700'>Amount</label>
//                     <input
//                         type='text'
//                         value={`N${(amount / 100).toFixed(2)}`}
//                         disabled
//                         className='w-full p-2 border border-gray-300 rounded'
//                     />
//                 </div>
//                 <div className='mt-6'>
//                     <PaystackButton className='bg-blue-500 text-white p-4 rounded' {...componentProps} />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default PaymentGateway;























// import React, { useState } from 'react';
// import { PaystackButton } from 'react-paystack';

// const PaymentGateway = ({ cart = [] }) => { // Default cart to an empty array
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//     // const publicKey = 'pk_live_4dbd04dfaef7d0f8d8606098b2fcba57db41254e';

//      const publicKey = 'pk_test_c6bee9ded77c2f304cfec1423b5461c545a77ab9';
//     const amount = cart.reduce((total, item) => {
//         const priceString = item.price.replace(/[^0-9.-]+/g, '');
//         const price = parseFloat(priceString);
//         if (isNaN(price)) {
//             console.warn(`Invalid price detected: ${item.price}`);
//             return total;
//         }
//         return total + price;
//     }, 0) * 100; // Paystack amount is in kobo, hence the multiplication by 100

//     const componentProps = {
//         email,
//         amount,
//         metadata: {
//             name,
//             cart,
//         },
//         publicKey,
//         text: "Pay Now",
//         onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
//         onClose: () => alert("Wait! Don't leave :("),
//     };

//     return (
//         <div className='max-w-[1240px] mx-auto mt-10 mb-10 p-4'>
//             <h1 className='text-3xl md:text-5xl mb-6 text-center font-medium text-gray-800'>Payment Details</h1>
//             <form className='max-w-[600px] mx-auto'>
//                 <div className='mb-4'>
//                     <label className='block text-gray-700'>Name</label>
//                     <input
//                         type='text'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className='w-full p-2 border border-gray-300 rounded'
//                     />
//                 </div>
//                 <div className='mb-4'>
//                     <label className='block text-gray-700'>Email</label>
//                     <input
//                         type='email'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className='w-full p-2 border border-gray-300 rounded'
//                     />
//                 </div>
//                 <div className='mb-4'>
//                     <label className='block text-gray-700'>Amount</label>
//                     <input
//                         type='text'
//                         value={`N${(amount / 100).toFixed(2)}`}
//                         disabled
//                         className='w-full p-2 border border-gray-300 rounded'
//                     />
//                 </div>
//                 <div className='mt-6'>
//                     <PaystackButton className='bg-blue-500 text-white p-4 rounded' {...componentProps} />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default PaymentGateway;























import React, { useEffect, useState } from 'react';

const PaymentGateway = ({ cart = [] }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        // Load Paystack script
        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Calculate total amount
        const totalAmount = cart.reduce((total, item) => {
            const priceString = item.price.replace(/[^0-9.-]+/g, '');
            const price = parseFloat(priceString);
            if (isNaN(price)) {
                console.warn(`Invalid price detected: ${item.price}`);
                return total;
            }
            return total + price;
        }, 0);
        setAmount(totalAmount * 100); // Paystack amount is in kobo
    }, [cart]);

    const payWithPaystack = (e) => {
        e.preventDefault();

        const handler = window.PaystackPop.setup({
            key: 'pk_test_c6bee9ded77c2f304cfec1423b5461c545a77ab9', // Replace with your public key
            email: email,
            amount: amount,
            ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generates a pseudo-unique reference
            metadata: {
                custom_fields: cart.map(item => ({
                    display_name: item.name,
                    variable_name: item.name,
                    value: `Size: ${item.size}, Price: ${item.price}`
                }))
            },
            onClose: function() {
                alert('Window closed.');
            },
            callback: function(response) {
                let message = 'Payment complete! Reference: ' + response.reference;
                alert(message);
                // Optionally, you can redirect to a success page or perform any other action
            }
        });

        handler.openIframe();
    };

    return (
        <div className='max-w-[1240px] mx-auto mt-10 mb-10 p-4'>
            <h1 className='text-3xl md:text-5xl mb-6 text-center font-medium text-gray-800 font-blackOps'>AFRO-THREADS</h1>
            <h1 className='text-3xl  mb-6 text-center font-medium text-gray-800'>Payment Details</h1>
            <form id='paymentForm' className='max-w-[600px] mx-auto' onSubmit={payWithPaystack}>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Name</label>
                    <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full p-2 border border-gray-300 rounded'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input
                        type='email'
                        id='email-address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full p-2 border border-gray-300 rounded'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Amount</label>
                    <input
                        type='text'
                        id='amount'
                        value={`N${(amount / 100).toFixed(2)}`}
                        disabled
                        className='w-full p-2 border border-gray-300 rounded'
                    />
                </div>
                <div className='mt-6'>
                    <button
                        type='submit'
                        className='bg-blue-500 mx-auto text-center justify-center flex text-white p-2 rounded-lg w-[150px]'
                    >
                        Pay Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentGateway;


