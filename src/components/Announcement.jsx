import React from 'react';
import Marquee from "react-fast-marquee";

const Announcement = () => {

    const guidelinesLink = "https://drive.google.com/file/d/1GVuA8UeLy44SawEdTpdTFaLx0XczM-hk/";
    return (
        <div>
            <Marquee className='mt-[-25px] bg-white text-black'>
                <a href={guidelinesLink} target='_blank' rel="noreferrer" className='px-16 text-green-700 capitalize'>Announcement 📢 : Click here to Download Guidelines and Code of Conduct.!</a>
                <p className='px-16 text-red-500 capitalize'>Alert ⚠️ : The last date to register is December 25th, 2023.</p>
                <p className='px-16 text-orange-500 capitalize'>Notice 📋 : Problem statements updated soon...!</p>

            </Marquee>
        </div>
    )
}

export default Announcement;
