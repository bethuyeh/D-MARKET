import React from "react";
import styleimg from '../Assets/Shoe3.png'
import styleimg2 from '../Assets/Shoe1.jpg'

function Style() {
    return(
        <div className="w-full mt-10 mb-10">

            <h1 className='text-center text-4xl md:text-6xl text-gray-800'>Improve Your Style</h1>

<div className="relative p-6"> 
<div className="absolute bottom-0 left-0 w-full">
<div className="h-0.5 bg-gray-800 w-12 mx-auto mb-1"></div> {/* Short line on top */}
<div className="h-0.5 bg-gray-800 w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
<div className="h-0.5 bg-gray-800 w-12 mx-auto"></div> {/* Short line on bottom */}
</div>
</div>
            <div className="max-w-[1240px] grid md:grid-cols-2 gap-8 mx-auto">
                
                <img
                 src={styleimg}
                 alt="/img"
                 className="w-[400px] mx-auto mt-10 md:mt-[100px] my-5 rounded-md"
                 />

                 <div className="flex flex-col justify-center mx-8">
                    <h1 className="p-6 text-4xl md:text-5xl text-center text-gray-800 font-medium">Who We Are</h1>
                    <p className="text-gray-800 font-medium text-center">
                    At Afro-Threads, we celebrate African heritage through contemporary fashion. Our designs blend traditional patterns with modern styles, offering unique, high-quality clothing that tells a story. Founded by passionate designers, we aim to bring vibrant African culture to the global fashion scene.
                    </p>
                 </div>

                 <div className="flex flex-col justify-center mx-8 md:mt-[-100px]">
                    <h1 className="p-6 text-4xl md:text-5xl text-center text-gray-800 font-medium">What We Stand For</h1>
                    <p className="text-gray-800 font-medium text-center p-2">
                    We stand for authenticity, sustainability, and empowerment. Afro-Threads is dedicated to preserving African traditions, promoting ethical fashion practices, and supporting local artisans. Our commitment to quality and cultural integrity ensures that every piece is not just a garment, but a symbol of pride and craftsmanship.
                    </p>
                 </div>
                 <img
                 src={styleimg2}
                 alt="/img"
                 className="w-[400px] mx-auto md:mt-[-10px] rounded-md"
                 />
            </div>
        </div>
    )
}

export default Style