import React, { useState } from 'react'
import { FaAlignRight, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='p-3 w-full bg-white shadow-xl'>
                <div className='px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 justify-between'>
                    <div>
                        <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                            <Link className='font-bold text-2xl' to="/">
                                INFO WARGA RT 005
                            </Link>
                            <div className='md:hidden'>
                                <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? (
                                    <FaArrowUp />
                                ) : (
                                    <FaAlignRight />
                                )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isOpen ? "block" : "hidden"
                            }`}>
                            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                                <Link to=""><li className='hover:bg-indigo-400 duration-500 p-3 rounded-lg hover:text-white'>BERANDA</li></Link>
                                <a href="#tentang_kami"><li className='hover:bg-indigo-400 duration-500 p-3 rounded-lg hover:text-white'>TENTANG KAMI</li></a>
                                <a href="#team_kami"><li className='hover:bg-indigo-400 duration-500 p-3 rounded-lg hover:text-white'>PENGURUS</li></a>
                                <Link to=""><li className='hover:bg-indigo-400 duration-500 p-3 rounded-lg hover:text-white'>KONTAK</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar