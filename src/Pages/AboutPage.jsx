import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Assets/Fashion 23.jpg"
import About2 from "../Assets/Anyang Chunky Sole Patent Loafers - 38.jpg"
import Mission from "../Components/Mission";
import Style from "../Components/Style";
import Footer from "../Components/Footer";

function AboutPage() {
    return(
        <div>
            <Navbar />

            <h1 className='text-gray-800 text-4xl md:text-6xl mx-auto text-center mt-[50px] md:mt-20 p-2'>ABOUT US AT AFRO-THREADS</h1>
            
            <div className="relative p-6"> 
             <div className="absolute bottom-0 left-0 w-full">
               <div className="h-0.5 bg-gray-800 w-12 mx-auto mb-1"></div> {/* Short line on top */}
                 <div className="h-0.5 bg-gray-800 w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
                     <div className="h-0.5 bg-gray-800 w-12 mx-auto"></div> {/* Short line on bottom */}
                     </div>
                 </div>

                 <div className="max-w-[1240px] gap-20 mx-auto grid md:grid-cols-2 mt-7 px-4">
                    <div className="flex flex-col md:flex-row">
                 <img src={About} alt='/img' className='w-[300px] mx-auto rounded-lg md:mt-[100px]' />
                 <img src={About2} alt='/img' className='w-[300px] mt-8 md:ml-8 h-[300px] mx-auto rounded-lg md:mt-[200px]' />

                 </div>
                 <div className="flex flex-col justify-center md:ml-20">
                    <h1 className="p-6 text-7xl text-gray-800 text-center">
                        We Deliver
                    </h1>
                    <p className="p-2 text-gray-800 font-medium text-center">
                    Afro-Threads brings you exquisite, handcrafted clothing directly to your doorstep. We ensure a seamless shopping experience with fast, reliable shipping and exceptional customer service. Our commitment to quality means you receive the finest garments, designed and crafted with care and precision.
                    </p>

                   
                 </div>
                 </div>
                 <Mission />
                 <Style />
                 <Footer />
        </div>
    )
}

export default AboutPage