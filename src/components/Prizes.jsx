import React from 'react';
import 'tailwindcss/tailwind.css';

// import bg from "../assets/bg.svg";
import i from "../assets/smallpeaces/10.png";
import j from "../assets/smallpeaces/11.png";
import a from "../assets/smallpeaces/6.png";
import b from "../assets/smallpeaces/7.png";
import c from "../assets/smallpeaces/3.png";
import d from "../assets/smallpeaces/5.png";
import e from "../assets/smallpeaces/12.png";
import f from "../assets/smallpeaces/4.png";

const Prizes = () => {
    const prize = {
        first: [
            {
                price: "₹15,000",
                description: "FOR 1ST PRIZE/DOMAIN"
            },
        ],
        second: [
            {
                price: "₹10,000",
                description: "FOR 2ND PRIZE/DOMAIN"
            },
        ],
    }
    return (
        <div className='sm:mt-[120px] mt-[50px] justify-center items-center flex flex-row' id="prizes">
            <style>
                {`
                 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

          .text-stroke {
            -webkit-text-stroke: 2px black;
            font-family: 'Poppins', sans-serif;
          }

          .text-stroke-black {
            -webkit-text-stroke: 2px black;
            font-family: 'Poppins', sans-serif;
          }
        `}
            </style>
            <div className="text-stroke text-stroke-black opacity-30  text-white absolute sm:z-[-60] z-[-40] uppercase sm:text-[380px] text-[100px] sm:tracking-widest tracking-wide  sm:mt-[-134px] mt-[-270px]" >
                prizes
            </div>
            <div className="absolute z-[-60] mt-[-350px] ml-[-700px]" >
                <img src={b} alt="" className='w-20 h-20 ' />
            </div>
            <div className="absolute z-[-60] mt-[-70px] ml-[600px]" >
                <img src={b} alt="" className='w-20 h-20 ' />
            </div>
            <div className="absolute z-[60] sm:mt-[480px] mt-[150px] ml-[0px]" >
                <img src={b} alt="" className='w-20 h-20 ' />
            </div>
            <div className="absolute z-[-60] mt-[-700px] ml-[300px]" >
                <img src={c} alt="" className='w-20 h-20 ' />
            </div>
            <div className="absolute z-[-60] mt-[-400px] ml-[-1100px]" >
                <img src={i} alt="" className='w-20 h-20 ' />
            </div>
            <div className="absolute z-[60] mt-[300px] ml-[-500px]" >
                <img src={c} alt="" className='w-20 h-20 ' />
            </div>
            <div className="absolute z-[60] mt-[100px] ml-[-900px]" >
                <img src={j} alt="" className='w-20 h-20 ' />
            </div>
            <div className="absolute z-[60] mt-[400px] ml-[-1200px]" >
                <img src={a} alt="" className='w-20 h-20 ' />
            </div>
            <div className="absolute z-[60] mt-[550px] ml-[-400px]" >
                <img src={d} alt="" className='w-20 h-20 ' />
            </div>
            <div className="absolute z-[60] mt-[350px] ml-[600px]" >
                <img src={e} alt="" className='w-20 h-20 ' />
            </div>
            <div className="absolute z-[-60] mt-[100px] ml-[900px]" >
                <img src={i} alt="" className='w-20 h-20 ' />
            </div>
            {/* <img src={i} alt="" className='w-20 h-20' />
                <img src={a} alt="" className='w-20 h-20' />
                <img src={b} alt="" className='w-20 h-20  mt-[-90px] ml-[-201px]' />
                <img src={c} alt="" className='w-20 h-20' />
                <img src={d} alt="" className='w-20 h-20' />
                <img src={a} alt="" className='w-20 h-20' />
                <img src={a} alt="" className='w-20 h-20' />
                <img src={b} alt="" className='w-20 h-20' />
                <img src={b} alt="" className='w-20 h-20' />
                <img src={f} alt="" className='w-20 h-20' />
                <img src={e} alt="" className='w-20 h-20' />
                <img src={j} alt="" className='w-20 h-20' /> */}
            <div>
                <div className='text-center flex flex-col  justify-center items-center'>
                    <h1 className='sm:text-9xl text-5xl text-blue-600 font-semibold sm:tracking-widest tracking-wide mt-20 '>₹100000</h1>
                    <h2 className='text-center sm:text-6xl text-2xl text-red-500 font-semibold sm:mt-[-20px] mt-[-7px]'>in prizes to win</h2>
                </div>
                <div className='flex sm:flex-row flex-col justify-center items-center'>
                    <div className='flex flex-col sm:p-14 p-2 sm:mt-0 mt-3'>
                        <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                            <div className='align-middle sm:mt-12 mt-0 font-semibold sm:text-base text-[20px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                                <p>{prize.first[0].price}</p>
                                <p>{prize.first[0].description}</p>
                            </div>
                        </div>
                        <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-blue-600 border-2 border-black" />
                    </div>
                    <div className='flex flex-col p-3'>
                        <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                            <div className='align-middle sm:mt-12 mt-0 font-semibold sm:text-base text-[20px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                                <p>{prize.second[0].price}</p>
                                <p>{prize.second[0].description}</p>
                            </div>
                        </div>
                        <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-red-600 border-2 border-black" />
                    </div>
                </div>
            </div>
        </div>
    )
}
//<div className="text-center"><span style="text-blue-600 text-[488px] font-semibold font-['Poppins']">₹</span><span style="text-blue-600 text-[488px] font-medium font-['Poppins']">100000</span></div>
export default Prizes;
