import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.png";

//react icons
import { FaXmark, FaBars } from "react-icons/fa6"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    //Nav items Array
    const navItems = [
        { link: "Home", path: "/" },
        { link: "Schedule", path: "#schedule" },
        { link: "Prizes", path: "#prizes" },
        { link: "Tracks", path: "#tracks" },
        { link: "Problem Statements", path: "/problemstatement" },
        { link: "Sponsors", path: "#sponsors" },
        { link: "FAQs", path: "#faqs" },
        { link: "Contact", path: "#contact" },
    ];
    const handleNavigation = (path) => {
        const targetSection = document.getElementById(path.substring(1)); // Remove '#' from path

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }
    };


    return (
        <header className='w-full bg-white fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={Logo} alt="Logo" className='w-20 inline-block items-center' /><span>PESCE</span></a> */}
                    <a href=""><img src={Logo} alt="Logo" className='inline-block items-center' /></a>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map((link, index) => (
                            <li key={index}>
                                <a href={link.path} onClick={() => handleNavigation(link.path)} className='block text-base hover:text-grey first:font-semibold'>{link.link}</a>
                            </li>
                        ))}
                    </ul>

                    {/* btn for large divices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="https://devfolio.co/"><button className='bg-apply text-white py-2 px-4 transition ease-in-out delay-150 hover:-translate-all-1 hover:scale-110 rounded'>Apply now</button></a>
                        {/* <a href="https://devfolio.co/"><button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 */}
                    </div>
                    {/* menu button only mobile */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='focus:outline-none focus:text-grey' >
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 text-black' />) : (<FaBars className='h-6 w-6 text-black' />)
                            }
                        </button>
                    </div>
                </div>
                {/* nav items for mobile divice */}
                <div className={`space-y-4 px-4 mt-16 py-4 bg-white rounded ${isMenuOpen ? "block fixed top-0 right-0 left-0 ease-in-out duration-500" : "hidden"}`}>
                    <ul className="list-none">
                        {navItems.map((link, index) => (
                            <li key={index}>
                                <a href={link.path} onClick={() => handleNavigation(link.path)} className='block text-start text-black hover:text-grey first:font-medium mt-6 p-3 border-b border-gray-500 '>
                                    {link.link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

        </header >
    )
}

export default Navbar;
