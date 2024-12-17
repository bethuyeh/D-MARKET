import React from 'react';
import carouselData from './CarouselInput';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from 'react-router-dom';

function ImageCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className='w-full p-4 mb-10'>
            <h1 className='text-center text-4xl md:text-6xl text-gray-800'>Best Sellers</h1>

            <div className="relative p-6"> 
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-0.5 bg-gray-800 w-12 mx-auto mb-1"></div> {/* Short line on top */}
          <div className="h-0.5 bg-gray-800 w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
          <div className="h-0.5 bg-gray-800 w-12 mx-auto"></div> {/* Short line on bottom */}
        </div>
      </div>

            <div className='mt-10 gap-8 mx-auto overflow-x-hidden overflow-y-hidden'>
                <Slider {...settings}>
                    {carouselData.map((carouselData, id) => (
                        <div key={id} className='flex flex-col p-4 '>
                            <div className='relative border rounded-lg bg-gray-800'>
                                <img
                                    src={carouselData.image}
                                    alt='/img'
                                    className='block mx-auto p-2 w-[200px]'
                                />
                                {/* <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-70'>
                                    <button className="text-white font-semibold py-2 px-4 bg-gray-700 hover:bg-orange-500 rounded">
                                        <Link to='/'>Place Order</Link>
                                    </button>
                                </div> */}
                            </div>
                            <h1 className='text-center font-medium'>
                                {carouselData.name}
                            </h1>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ImageCarousel;
