import React from 'react';
import pesce from "../assets/pescelogo.png";
import { VscMap } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import gdsc from "../assets/gdsc.png";

const Footer = () => {
  const openMap = () => {
    // Replace the link below with your desired link
    window.location.href = 'https://maps.app.goo.gl/P81wpxZLZG3T3UkQ7';
  };
  return (
    <div className='bg-black text-white sm:p-9 p-1'>
      <div>
        <div className='flex sm:flex-row flex-col sm:justify-around justify-center items-center sm:mx-5 mx-1 my-10'>
          <div className='sm:justify-center items-center flex sm:flex-col flex-col'>
            <p className='font-normal text-xl'>
              Brought to you by,
            </p>
            <img src={pesce} alt="" className='sm:h-32 h-20 mt-5' />
          </div>
          <div className='flex sm:flex-row flex-col'>
            {/* <iframe  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe
              title="Map"
              className="sm:w-200 w-200 h-200 mx-4 border-solid border-4 border-blue-400 rounded justify-center hidden sm:block"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.98244794815!2d76.87743950955608!3d12.517321624626362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa0fa2477e217%3A0x7f46df666eecd99!2sPES%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1701629436611!5m2!1sen!2sin"
              width="200"
              height="200"
              allowFullScreen
            ></iframe>
            <div className='flex flex-col sm:mt-0 mt-2'>
              <p className='sm:text-3xl text-2xl font-normal sm:pb-3 pb-0'>
                Hackathon Venue
              </p>
              <p className='sm:text-[16px] text-[10px] font-normal capitalize sm:mt-3 mt-1'>
                Chowdayya Auditorium <br /> PES College of Engineering Mandya, <br /> Karnataka, India
              </p>
              <div className='mt-4'>
                <button className="bg-white text-black font-bold py-2 px-4 rounded inline-flex items-center" onClick={openMap}>
                  <span className='font-normal capitalize'>get Directions</span>
                  <VscMap className='text-2xl ml-2' />
                </button>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div className="border-b w-200"></div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer
