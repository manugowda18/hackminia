import React from 'react';
import Sponser1 from "../assets/Sponser/sponser1.png"

const Sponsers = () => {
  return (
    <div id='sponsors' className='bg-svg sm:bg-[length:900px_4000px] bg-[length:1000px_1700px] bg-center p-3 mt-10'>
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
      <div className='sm:mt-64 mt-40 justify-center items-center flex flex-row'>
        <div className="text-stroke text-stroke-black opacity-30  text-white absolute sm:z-[-60] z-[-40] uppercase sm:text-[220px] text-[55px] sm:tracking-widest tracking-wide  sm:mt-[-554px] mt-[-730px]" >
          sponsors
        </div>
        <div>
          <div className='flex sm:flex-row flex-col justify-center items-center'>
            <div className='flex flex-col sm:p-14 p-2'>
              <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                <div className='flex justify-center items-center mt-3'>
                  <img src={Sponser1} alt="sponser" className='sm:h-[130px] h-[100px]' />
                </div>
              </div>
              <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-yellow-300 border-2 border-black" />
            </div>
            <div className='flex flex-col sm:p-14 p-2'>
              <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                <div className='align-middle sm:mt-12 mt-0  sm:text-lg text-[15px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                  <p>TO Be</p>
                  <p>Announced</p>
                  <p>Soon</p>
                </div>
              </div>
              <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-green-600 border-2 border-black" />
            </div>
            <div className='flex flex-col sm:p-14 p-2'>
              <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                <div className='align-middle sm:mt-12 mt-0  sm:text-lg text-[15px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                  <p>TO Be</p>
                  <p>Announced</p>
                  <p>Soon</p>
                </div>
              </div>
              <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-blue-600 border-2 border-black" />
            </div>
          </div>
          <div className='flex sm:flex-row flex-col justify-center items-center sm:mt-[-40px] mt-0'>
            <div className='flex flex-col sm:p-14 p-2'>
              <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                <div className='align-middle sm:mt-12 mt-0  sm:text-lg text-[15px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                  <p>TO Be</p>
                  <p>Announced</p>
                  <p>Soon</p>
                </div>
              </div>
              <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-purple-400 border-2 border-black" />
            </div>
            <div className='flex flex-col sm:p-14 p-2'>
              <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                <div className='align-middle sm:mt-12 mt-0  sm:text-lg text-[15px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                  <p>TO Be</p>
                  <p>Announced</p>
                  <p>Soon</p>
                </div>
              </div>
              <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-red-600 border-2 border-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsers;
