import React from 'react'
import { FaCompass, FaLink, FaMailBulk, FaWeebly, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='bg-indigo-500'>
                <div className='grid md:grid-cols-2'>
                    <div className='p-5 py-10 text-white'>
                        <span className='text-xl text-justify font-bold'>
                            HUBUNGI PENGURUS RT UNTUK MENDAPATKAN INFORMASI LENGKAP
                        </span>
                    </div>
                    <div className='p-3 py-10 text-white text-center'>
                        <button className='border-2 font-bold hover:text-black hover:bg-white rounded-full p-2 duration-500'> CHAT WHATSAPP</button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 p-3'>
                    <div className=''>
                        <div className='mb-3 font-bold'>RT 005</div>
                        <div className='text-justify'>
                            ADALAH SOLUSI TERBAIK DALAM MENDAPATKAN INFORMASI BAGI WARGA DILINGKUNGAN RT.005 RW.016 KEL. XXXX KEC. XXXX KABUPATEN BEKASI.
                        </div>
                    </div>
                    <div>
                        <div className='mb-3 font-bold'>PETA SITUS</div>
                        <div>
                            <ul>
                                <Link to="">
                                    <li className='mb-3'>
                                        Beranda
                                    </li>
                                </Link>
                                <Link to="">
                                    <li className='mb-3'>
                                        Tentang Kami
                                    </li>
                                </Link>
                                <Link to="">
                                    <li className='mb-3'>
                                        Pengurus
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='mb-3 font-bold'>KONTAK KAMI</div>
                        <div>
                            <ul>
                                <li><Link className='flex hover:text-indigo-400 duration-500 mb-3 font-semibold' to=""><FaCompass className='text-lg pt-2'/>&nbsp;Maps</Link></li>
                                <li><Link className='flex hover:text-indigo-400 duration-500 mb-3 font-semibold' to=""><FaMailBulk className='text-lg pt-2'/>&nbsp;E-mail</Link></li>
                                <li><Link className='flex hover:text-indigo-400 duration-500 mb-3 font-semibold' to=""><FaLink className='text-lg pt-2'/>&nbsp;website</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div className='p-3'>
                        <div className='text-sm'>copyright &copy; 2023 design by <a className='underline text-indigo-500' href="">ariqrafikusumah</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer