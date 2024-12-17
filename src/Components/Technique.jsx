import React from "react";
import Tech from '../Assets/ShopWus.jpg'

function Technique() {
    return(
        <div className="w-full">
             <div className='relative'>
        <img src={Tech} alt='/img' className='w-full md:h-[400px] object-cover brightness-50' />
        <div className='md:p-32 px-4 absolute justify-center top-0 left-0 right-0 flex flex-col pb-10'>
            <h1 className='text-slate-200 flex justify-center text-4xl md:text-6xl font-light mt-5 text-center mx-auto border-white p-2'>STYLE. TECHNIQUE. INNOVATION</h1>
        </div>
</div>
        </div>
    )
}

export default Technique