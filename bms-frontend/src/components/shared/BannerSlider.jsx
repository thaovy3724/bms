import React from 'react';
import Slider from 'react-slick';
import { banners } from '../../utils/constants';
const BannerSlider = () => {
    const settings = {
        centerMode: true,
        centerPadding: '400px',
        slidesToShow: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        infinity: true
    }; 

    return (
        <div className="w-full bg-white py-6">
            <div className="mx-auto px-">
                <Slider {...settings}>
                    {
                        banners.map((banner, index) => (
                            <div key={index} className="px-2">
                                <img src={banner} alt={`Banner ${index + 1}`} 
                                className="w-full h-[300px] object-cover rounded-xl" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default BannerSlider;