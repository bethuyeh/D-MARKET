import React from "react";
import Mish from '../Assets/Fashion-45.jpg'

function Mission() {
    return(
        <div className="w-full p-4">
            <h1 className="mx-auto text-5xl md:text-6xl text-gray-800 text-center mt-5">Our Mission</h1>

<div className="relative p-6"> 
<div className="absolute bottom-0 left-0 w-full">
<div className="h-0.5 bg-gray-800 w-12 mx-auto mb-1"></div> {/* Short line on top */}
<div className="h-0.5 bg-gray-800 w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
<div className="h-0.5 bg-gray-800 w-12 mx-auto"></div> {/* Short line on bottom */}
</div>
</div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mt-7 px-4">

            <div className="flex flex-col justify-center">
                <h1 className="p-6 text-4xl md:text-6xl text-gray-800 text-center">
                Unique Styling In Every Way
                </h1>
                <p className="p-2 text-gray-800 font-medium text-center">
                Our mission is to fuse African heritage with modern fashion, creating timeless pieces that celebrate cultural diversity. We strive to empower local artisans, promote sustainable practices, and inspire confidence through unique, high-quality designs. At Afro-Threads, we aim to make every customer feel both stylish and culturally connected.
                </p>
                
            </div>

            <img src={Mish} alt='/img' className='w-[400px] mx-auto mt-10 md:mt-[50px] rounded-md' />
        </div>
        </div>
    )
}

export default Mission