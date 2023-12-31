/* eslint-disable react/prop-types */
import React from 'react';
import a from "../assets/smallpeaces/1.png";
import d from "../assets/smallpeaces/5.png";
import e from "../assets/smallpeaces/6.png";
import f from "../assets/smallpeaces/7.png";
import g from "../assets/smallpeaces/8.png";
import h from "../assets/smallpeaces/9.png";
import i from "../assets/smallpeaces/10.png";
import j from "../assets/smallpeaces/11.png";

const EventList = ({ events }) => {
    return (
        <ul className='p-3'>
            {events.map((event, index) => (
                <li className='flex sm:flex-row flex-col block text-start text-black hover:text-grey first:font-medium  uppercase mt-6 p-3 border-b border-gray-500 sm:tracking-widest tracking-normal' key={index}>
                    <strong className="mr-10">{event.time}</strong> {event.event}
                </li>
            ))}
        </ul>
    );
};

const Schedule = () => {
    const title = "Let's HACK !!";
    const list = {
        day1: [
            {
                time: "8:00 AM IST",
                event: "Main Registration Opens & Breakfast"
            },
            {
                time: "10:00 AM IST",
                event: "Opening Ceremony !! "
            },
            {
                time: "11:15 AM IST",
                event: "Hacking Starts!"
            },
            {
                time: "1:00 PM IST",
                event: "Lunch: Participants can go in batches till 2 PM"
            },
            {
                time: "3:15 PM IST",
                event: "1st Checkpoint: Teams update, get feedback."
            },
            {
                time: "5:00 PM IST",
                event: "Snacks: Quick refresh for high energy."
            },
            {
                time: "8:15 PM IST",
                event: "2nd Checkpoint: Teams showcase, address challenges. "
            },
            {
                time: "8:30 PM IST",
                event: " Dinner: Participants can go in batches till 9:30 PM"
            },
            {
                time: "12:00 AM IST",
                event: "Fun Games: Break from coding for fun activities."
            },
            {
                time: "2:00 AM IST",
                event: "Midnight snack: Coffee/Tea + Biscuit for focus."
            },
        ],
        day2: [
            {
                time: "7:00 AM IST",
                event: "3rd Checkpoint: Teams finalize, prep for last stretch."
            },
            {
                time: "8:00 AM IST",
                event: "Breakfast: Final push breakfast for energy."
            },
            {
                time: "10:30 AM IST",
                event: "Final Presentation: Teams present projects to judges and peers."
            },
            {
                time: "12:30 PM IST",
                event: "Closing Ceremony: Winners announced, prizes distributed, acknowledgments. "
            },
            {
                time: "2:00 PM IST",
                event: "Lunch: Hackathon concludes with celebratory lunch."
            },
            // {
            //     time: "Full Shedule",
            //     event: <a href='https://pescemandya.org'>Click Here</a>
            // },
            // {
            //     time: "4:30 PM IST",
            //     event: "After Party 🎉"
            // },
        ]
    }

    return (
        <div id="schedule" className='bg-svg sm:bg-[length:900px_4000px] bg-[length:1000px_1700px] bg-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='sm:mt-[-70px] mt-[20px] mb-[-10]'>
                    <h1 className='text-center text-black sm:text-[90px] text-[34px] font-medium underline decoration-dotted decoration-sky-500 uppercase'>
                        Schedule
                    </h1>
                </div>
                <div className='flex flex-row p-3'>
                    <div className="sm:w-[468px] w-[289px] sm:h-[71px] h-9 sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                        <div className='align-middle font-semibold sm:text-3xl text-[20px] uppercase text-center sm:p-3 p-0  sm:tracking-widest tracking-normal'>
                            <p>{title}</p>
                        </div>
                    </div>
                    <div className="sm:w-[468px] w-[239px] sm:h-[71px] h-9 absolute sm:z-[-50] z-[-40] ml-8  bg-blue-600 border-2 border-black" />
                </div>
                <div>
                    <img src={d} alt="Shape" className='sm:w-16 w-5 sm:mt-[-50px] mt-[-30px] sm:ml-[270px] ml-[20px] ' />
                    <img src={e} alt="Shape" className='sm:w-16 w-5 sm:mt-[-70px] mt-[-30px] sm:ml-[-210px] ml-[-120px] ' />
                </div>
                <div className='flex flex-row p-3'>
                    <div className="sm:w-[900px] w-[289px] sm:h-auto h-auto sm:mt-4 mt-2 bg-white border-2 border-black text-center " >
                        <img src={a} alt="shape" className='sm:w-16 w-5 sm:ml-[-40px] ml-0' />
                        <h1 className='mt-6 p-1 uppercase sm:tracking-widest tracking-normal font-semibold'>DAY 1, 5th January, 2024<span className='bg-red-600 border-2 border-red-600 '></span></h1>
                        <EventList events={list.day1} />
                        <img src={g} alt="shape" className='sm:w-16 w-5 sm:ml-[-40px] z-[-30] ml-0' />
                        <h1 className='mt-6 p-1 uppercase sm:tracking-widest tracking-normal font-semibold'>DAY 2, 6th January, 2024<span className='bg-blue-600 border-2 border-blue-600 '></span></h1>
                        <EventList events={list.day2} />
                        <img src={j} alt="shape" className='sm:w-16 w-5 sm:ml-[800px] z-[-30] ml-0' />
                    </div>
                    <div className="sm:w-[900px] w-[239px] sm:h-[1470px] h-9 absolute sm:z-[-50] z-[-40] ml-8  bg-red-600 border-2 border-black" />
                    <img src={i} alt="shape" className='sm:w-[83px] w-[52px] sm:h-[83px] h-[52px] sm:ml-[-20px] ml-[-60px] mt-96 ' />
                </div>
            </div>
        </div>
    )
}

export default Schedule;
