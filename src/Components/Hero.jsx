import React from "react";
import HeroImg from '../Assets/African men cloth, Nigerian Kaftan, African traditional wear for men, Nigeria native wear for men, Gift for him, Photoshoot, Kaftan(1).jpg'
import { Link } from "react-router-dom";

function Hero() {
    return(
        <div className="w-full p-4 mb-10">
            <div className="max-w-[1240px] mt-10 md:mt-20 grid md:grid-cols-2 gap-10 px-4 mx-auto ">
                <div className="flex flex-col">
                <h1 className="text-gray-800 text-4xl md:text-6xl md:mt-10">
                Crafted To Seamlessly Blend Fashion With Function
                </h1>
                <Link to='/shop'><button className="bg-black mt-16 text-white hover:bg-gray-500 w-[300px] font-medium p-4 text-xl">
                    Shop With Us
                </button>
                </Link>
                </div>

                <img 
                 src={HeroImg}
                 alt="/img"
                 className="w-[450px] md:ml-[100px]"
                 />
            </div>
        </div>
    )
}

export default Hero