import React from 'react';
import Marquee from "react-fast-marquee";
import live from "../assets/live.gif";

const Announcement = () => {

    const guidelinesLink = "https://drive.google.com/file/d/1bZ2aZpRARhrG-Qk45rNLfqXmm1Df7qAm/view?usp=sharing";
    const problemStatement = "https://drive.google.com/drive/folders/13OHn0mB1tTIPF8NphlNx3hQsZrg-7c6j?usp=sharing";
    return (
        <div>
            <Marquee className='border-y-2 border-black'>
                <div className='flex items-center'> 
                    <a href={problemStatement} className='flex items-center'> 
                        <img src={live} alt="live"/>
                        <p className='px-16 text-orange-500 capitalize'>Notice 📋: 🚨 Problem statements are now LIVE! 🌐 Click here to view.</p>
                    </a>
                </div>
                <a href={guidelinesLink} target='_blank' rel="noreferrer" className='px-16 text-green-700 capitalize'>Announcement 📢 : Click here to Download Guidelines and Code of Conduct.!</a>
                <p className='px-16 text-red-500 capitalize'>Alert ⚠️ : The last date to register is December 25th, 2023.</p>


            </Marquee>
        </div>
    )
}

export default Announcement;
