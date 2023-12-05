import React from 'react';

const Contact = () => {

    const conferences = [
        { theme: 'AI/ML', coordinator: 'Pranav K Bhaskar', contactNum: '9606842596' },
        { theme: 'Web/App Development', coordinator: 'Pranav K Bhaskar & Manoj Gowda K S', contactNum: '9606842596, 9900882019' },
        { theme: 'Blockchain', coordinator: 'Manoj Gowda K S', contactNum: '9900882019' },
        { theme: 'Abeyantrix (Civil InnoStruct)', coordinator: 'Reethu G K', contactNum: '8095438206' },
        { theme: 'Design Quest (Mechanical Sciences)', coordinator: 'Pratham L', contactNum: '9108717149' },
    ];


    return (
        <div id='contact' className='bg-svg sm:bg-[length:600px_4000px] bg-[length:1000px_1700px] bg-center p-3' >
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

            <div className='sm:mt-36 mt-16'>
                <div className='flex sm:flex-row flex-col justify-center items-center'>
                    <div className="text-stroke text-stroke-black opacity-30  text-white absolute sm:z-[-60] z-[-40] uppercase sm:text-[220px] text-[55px] sm:tracking-widest tracking-wide  sm:mt-[-264px] mt-[-400px]" >
                        Contact
                    </div>
                    <div className='flex flex-col sm:p-14 p-2 sm:mt-0 mt-3'>
                        <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                            <div className='align-middle sm:text-base text-[20px] uppercase text-center sm:p-3 p-6  sm:tracking-widest tracking-normal mt-2'>
                                <p className='border-b border-blue-500'>Faculty Coordinators</p>
                                <div className='mt-5'>
                                    <p className='text-[12px]'>
                                        Girish Babu M C - 9986886421
                                    </p>
                                    <p className='text-[12px] mt-2 '>
                                        DR REVANESH M - 9482999222
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-blue-600 border-2 border-black" />
                    </div>
                    <div className='flex flex-col p-3'>
                        <div className="sm:w-[268px] w-[289px] sm:h-[178px] h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                            <div className='sm:text-base text-[15px] uppercase text-start sm:p-3 p-6  sm:tracking-widest tracking-normal mt-2'>
                                <p className='border-b border-red-500'>Student Coordinators</p>
                                <div className='mt-2'>
                                    <p className='sm:text-[9px] text-[11px]'>
                                        Pranav K Bhaskar - 9606842596
                                    </p>
                                    <p className='sm:text-[9px] text-[11px]'>
                                        Aniruddh Koundinya - 9880196904
                                    </p>
                                    <p className='sm:text-[9px] text-[11px]'>
                                        Mohanapriya K J - 8088106575
                                    </p>
                                    <p className='sm:text-[9px] text-[11px]'>
                                        Manoj Gowda - 9900882019
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-[268px] w-[239px] sm:h-[181px] h-9 absolute sm:z-[-40] z-[-40] ml-8  bg-red-600 border-2 border-black" />
                    </div>
                </div>

                <div className="overflow-x-auto sm:px-[350px] px-2 mb-5">
                    <div className='capitalize sm:text-xl text-normal p-5'>
                       for Problem Statement queries <span className='text-blue-600'>||</span>
                    </div>
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr>
                                <th className="border sm:text-base text-[12px] text-blue-500">Theme</th>
                                <th className="border sm:text-base text-[12px] text-red-500">Coordinator</th>
                                <th className="border sm:text-base text-[12px] text-blue-500">Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {conferences.map((conference, index) => (
                                <tr key={index}>
                                    <td className="border py-2 sm:px-2 px-1 sm:text-base text-[12px] ">{conference.theme}</td>
                                    <td className="border py-2 sm:px-2 px-1 sm:text-base text-[12px] ">{conference.coordinator}</td>
                                    <td className="border py-2 sm:px-2 px-1 sm:text-base text-[12px] ">{conference.contactNum}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Contact;
