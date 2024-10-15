

"use client"
import { useState } from 'react';
import './navber.css'
import Image from 'next/image'
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);

    const handleMouseEnter = () => {
        setIsOpens(true);
    };

    const handleMouseLeave = () => {
        setIsOpens(false);
    };

    return (
        <section className='bg-black'>
            <nav className="relative max-w-6xl mx-auto">
                <div className=" px-5 py-3 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <a href="#">

                            <Image
                                src="/logo/logo.png" // Use the path to your image
                                alt="Logo"
                                width={200}
                                height={100}
                                className="w-auto h-20"
                            />
                        </a>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <div className='text-3xl border rounded-[6px]'>
                                        <IoMenu></IoMenu>

                                    </div>
                                ) : (
                                    <div className='text-3xl border rounded-[6px]'>
                                        <RxCross2></RxCross2>

                                    </div>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:bg-transparent bg-white lg:dark:bg-transparent dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col md:flex-row gap-2 md:mx-6">
                            <Link href={'/'}>
                                <button className="button">
                                    <div className="blob1"></div>
                                    <div className="blob2"></div>
                                    <div className="inner">Home</div>
                                </button>
                            </Link>
                            <Link href={'/menu'}>
                                <button className="button">
                                    <div className="blob1"></div>
                                    <div className="blob2"></div>
                                    <div className="inner">Menu</div>
                                </button>
                            </Link>
                            <Link href={'/reservation'}>
                                <button className="button">
                                    <div className="blob1"></div>
                                    <div className="blob2"></div>
                                    <div className="inner">Reservation</div>
                                </button>
                            </Link>
                            <Link href={'/about'}>
                                <button className="button">
                                    <div className="blob1"></div>
                                    <div className="blob2"></div>
                                    <div className="inner">About Us</div>
                                </button>
                            </Link>
                            <div className="relative inline-block">
                                <Link href="/pages">
                                    <button
                                        id="dropdownDelayButton"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        className="button"
                                    >
                                        <div className="blob1"></div>
                                        <div className="blob2"></div>
                                        <div className="inner">
                                            Pages <span><FaAngleDown /></span>
                                        </div>
                                    </button>
                                </Link>

                                {/* Dropdown menu */}
                                {isOpens && (
                                    <div
                                        id="dropdownDelay"
                                        className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-black"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <Link href={'/contact'}>
                                <button className="button">
                                    <div className="blob1"></div>
                                    <div className="blob2"></div>
                                    <div className="inner">Contact Us</div>
                                </button>
                            </Link>

                        </div>


                    </div>
                </div>
            </nav>
        </section >
    );
};

export default Navbar;
