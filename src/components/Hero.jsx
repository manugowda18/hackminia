import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Devfolio from "../assets/devfolio.png";
import PESCE from "../assets/pescelogo.png";
const Hero = () => {

    const title = "National level";
    const date = "05-06th January, 2024 ";
    const link = "https://devfolio.co";

    return (
        <section className='bg-black '>
            <div>
                <div className='max-w-[800px] mt-[-0px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <a href="devfolio.co" className='flex items-center justify-center mt-2'>
                        <img src={PESCE} alt="" className='sm:w-40 w-20  mx-auto p-2' />
                    </a>
                    <h1 className='uppercase font-semibold text-white text-center font-poppins md:text-6xl sm:text-5xl text-3xl font-normal tracking-wide leading-tight'>
                        {title}
                    </h1>
                    <h1 className='uppercase p-1 font-semibold text-grey text-center font-poppins md:text-6xl sm:text-5xl text-3xl font-normal tracking-wide leading-tight'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'HACKathon <24Hrs/>',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'ಹ್ಯಾಕಥಾನ್ <24Hrs/>',
                                1000,
                            ]}
                            wrapper="span"
                            speed={5}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <div className='p-4'>
                        <h6 className='text-white text-center'>{date}</h6>
                        <h6 className='text-college p-1'>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'PES College of Engineering - MANDYA',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'ಪಿಇಎಸ್ ಕಾಲೇಜ್ ಆಫ್ ಇಂಜಿನಿಯರಿಂಗ್ - ಮಂಡ್ಯ',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={3}
                                style={{ fontSize: '20px', display: 'inline-block' }}
                                repeat={Infinity}
                            /></h6>
                    </div>
                    <a href={link} className='flex items-center justify-center mt-11'>
                        <img src={Devfolio} alt="" className='sm:w-60 w-40  mx-auto' />
                    </a>

                </div>
            </div>
        </section >
    )
}

export default Hero;
