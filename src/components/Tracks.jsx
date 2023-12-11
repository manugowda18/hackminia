import React from 'react';

const Tracks = () => {

    const PSlink = "https://docs.google.com/document/d/1nYRzmrGhzLinxvA-4SYFVfJo9H-tTZ0SlDgG35inS9Y/edit?usp=sharing";
    return (
        <div id='tracks' className='bg-svg sm:bg-[length:900px_4000px] bg-[length:1000px_1700px] bg-center p-3 mt-10'>
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
                <div className="text-stroke text-stroke-black opacity-30  text-white absolute sm:z-[-60] z-[-40] uppercase sm:text-[320px] text-[75px] sm:tracking-widest tracking-wide  sm:mt-[-554px] mt-[-780px]" >
                    tracks
                </div>
                <div>
                    <div className='flex sm:flex-row flex-col justify-center items-center'>
                        <div className='flex flex-col sm:p-14 p-2'>
                            <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                                <div className='align-middle sm:mt-8 mt-0  sm:text-base text-[15px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                                    <p>AI ML</p>
                                    <p>&</p>
                                    <p>Blockchain</p>
                                    <a href={PSlink} className='sm:text-[10px] text-[8px] text-purple-600 mt-1'>&quot;{`{PS: Click here.}`}&quot;</a>
                                </div>
                            </div>
                            <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-yellow-300 border-2 border-black" />
                        </div>
                        <div className='flex flex-col sm:p-14 p-2'>
                            <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                                <div className='align-middle sm:mt-8 mt-0  sm:text-lg text-[15px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                                    <p>Web Dev</p>
                                    <p>&</p>
                                    <p>App Dev</p>
                                    <a href={PSlink} className='sm:text-[10px] text-[8px] text-purple-600 mt-1'>&quot;{`{PS: Click here.}`}&quot;</a>

                                </div>
                            </div>
                            <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-green-600 border-2 border-black" />
                        </div>
                        <div className='flex flex-col sm:p-14 p-2'>
                            <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                                <div className='align-middle sm:mt-8 mt-0  sm:text-lg text-[15px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                                    <p>IoT</p>
                                    <p></p>
                                    <p className='text-[10px]'>(Internet of Things)</p>
                                    <a href={PSlink} className='sm:text-[10px] text-[8px] text-purple-600 mt-1'>&quot;{`{PS: Click here.}`}&quot;</a>
                                </div>
                            </div>
                            <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-blue-600 border-2 border-black" />
                        </div>
                    </div>
                    <div className='flex sm:flex-row flex-col justify-center items-center sm:mt-[-40px] mt-0'>
                        <div className='flex flex-col sm:p-14 p-2'>
                            <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                                <div className='align-middle sm:mt-8 mt-0  sm:text-lg text-[15px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                                    <p>Design Quest</p>
                                    <p></p>
                                    <p className='text-[10px]'>(Mechanical Sciences)</p>
                                    <a href={PSlink} className='sm:text-[10px] text-[8px] text-purple-600 mt-1'>&quot;{`{PS: Click here.}`}&quot;</a>
                                </div>
                            </div>
                            <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-purple-400 border-2 border-black" />
                        </div>
                        <div className='flex flex-col sm:p-14 p-2'>
                            <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                                <div className='align-middle sm:mt-8 mt-0  sm:text-lg text-[15px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal'>
                                    <p>Abeyantrix </p>
                                    <p className='text-[10px]'>(Civil InnoStruct)</p>
                                    <a href={PSlink} className='sm:text-[10px] text-[8px] text-purple-600 mt-1'>&quot;{`{PS: Click here.}`}&quot;</a>
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

export default Tracks;
