import React from 'react';
import Marquee from "react-fast-marquee";

const Announcement = () => {

    const guidelinesLink = "https://drive.google.com/file/d/1GVuA8UeLy44SawEdTpdTFaLx0XczM-hk/";
    return (
        <div>
            <Marquee className='mt-[-25px] bg-white text-black'>
                <a href={guidelinesLink} className='px-16 text-purple-700'>Announcement 📢 : Click here to Download Guidelines and Code of Conduct.!</a>
                <p className='px-16 text-green-700'>Alert ⚠️ : The last date to register is December 25, 2023.</p>

            </Marquee>
        </div>
    )
}

export default Announcement;
