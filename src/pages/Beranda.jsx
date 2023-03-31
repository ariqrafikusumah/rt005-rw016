import React from 'react'
import { Footer, Navbar, Document, Team, Tentang_kami } from '../components'
import Carousel from '../components/Carousel'
import { FaBookReader, FaHandHoldingHeart, FaInfo, FaUserFriends } from 'react-icons/fa'

function Beranda() {
    return (
        <>
            <Navbar />
            <Carousel />
            <div className='p-5'>
                <div className='grid grid-cols-3 gap-2 p-3'>
                    <div className='border bg-indigo-400 text-white rounded-lg'>
                        <div className='p-3 text-center'>
                            Administratif
                        </div>
                    </div>
                    <div className='border bg-indigo-400 text-white rounded-lg'>
                        <div className='p-3 text-center'>
                            Informasi
                        </div>
                    </div>
                    <div className='border bg-indigo-400 text-white rounded-lg'>
                        <div className='p-3 text-center'>
                            Keuangan
                        </div>
                    </div>
                    <div className='border bg-indigo-400 text-white rounded-lg'>
                        <div className='p-3 text-center'>
                            Berkas
                        </div>
                    </div>
                </div>
                <div className='font-bold p-3 ' id='tentang_kami'>
                    <div className='flex mb-3'>
                        <span className='p-2'>
                            <FaInfo className='text-6xl text-gray-500' />
                        </span>
                        <h2 className=' border-l-4 p-2'>
                            <div className='text-2xl'>
                                TENTANG KAMI
                            </div>
                            <hr />
                            <span className='text-gray-500 font-thin'>
                                RT.005 RW.016 Kel. XXX Kec. XXX Kabupaten Bekasi
                            </span>
                        </h2>
                    </div>
                </div>
                <div className='p-3'>
                    <Tentang_kami />
                </div>
                <div className='font-bold p-3' id='team_kami'>
                    <div className='flex mb-3'>
                        <span className='p-2'>
                            <FaUserFriends className='text-6xl text-gray-500' />
                        </span>
                        <h2 className=' border-l-4 p-2'>
                            <div className='text-2xl'>
                                TEAM KAMI
                            </div>
                            <hr />
                            <span className='text-gray-500 font-thin'>
                                Pengurus RT.005 RW.016 Kel. XXX Kec. XXX Kabupaten Bekasi
                            </span>
                        </h2>
                    </div>
                </div>
                <div className='p-3'>
                    <Team />
                </div>
                <div className='font-bold p-3'>
                    <div className='flex mb-3'>
                        <span className='p-2'>
                            <FaHandHoldingHeart className='text-6xl text-gray-500' />
                        </span>
                        <h2 className=' border-l-4 p-2'>
                            <div className='text-2xl'>
                                KEGIATAN
                            </div>
                            <hr />
                            <span className='text-gray-500 font-thin'>
                                Administrasi, Pelayanan Dan Pelaksanaan Kegiatan
                            </span>
                        </h2>
                    </div>
                </div>
                <div className='font-bold p-3'>
                    <div className='flex mb-3'>
                        <span className='p-2'>
                            <FaBookReader className='text-6xl text-gray-500' />
                        </span>
                        <h2 className=' border-l-4 p-2'>
                            <div className='text-2xl'>
                                DOKUMEN KEPENDUDUKAN
                            </div>
                            <hr />
                            <span className='text-gray-500 font-thin'>
                                Syarat Dan Prosedur Pengurusan Dokumen
                            </span>
                        </h2>
                    </div>
                </div>
                <div className='p-3'>
                    <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                        <Document />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
// https://i.ibb.co/MpFtxPc/17.jpg
// https://tni-au.mil.id/konten/unggahan/2019/07/img-20190721-wa0020.jpg
export default Beranda