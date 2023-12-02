import React from 'react';
import Illimage from "../assets/iiiustion.png";
import a from "../assets/smallpeaces/1.png";
import b from "../assets/smallpeaces/2.png";
import c from "../assets/smallpeaces/3.png";

const BeforeShedule = () => {
    return (
        <div id="tracks">
            <img src={Illimage} alt="ill" className='sm:w-[1027px] w-auto sm:h-[747px] w-auto p-8' />
            <img src={a} alt="Shape" className='sm:w-16 w-5 sm:mt-[-60px] mt-[1px] sm:ml-[1070px] ml-[40px] ' />
            <div className='text-end text-black sm:text-[70px] text-[24px] font-medium'>
                <h1 className="mt-[-60px]">Inspire. Innovate. Code</h1>
                <h1 className='sm:mt-[-40px] mt-0'> Conquer Challenges Together</h1>
                <img src={b} alt="Shape" className='sm:w-16 w-5 sm:mt-[-20px] mt-[-40px] sm:ml-[70px] ml-[100px] ' />
                <img src={c} alt="Shape" className='sm:w-16 w-5 sm:mt-[-50px] mt-[1px] sm:ml-[970px] ml-[180px] ' />
                <img src={b} alt="Shape" className='sm:w-16 w-5 sm:mt-[70px] mt-[00px] sm:ml-[1270px] ml-[10px] ' />
            </div>
        </div>
    )
}

export default BeforeShedule;
