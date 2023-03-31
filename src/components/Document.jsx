import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'

function Document() {
    return (
        <>
            <div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className="bg-indigo-400 border-2 p-2 text-white w-full">KTP DAN KK HILANG/RUSAK</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>SURAT PERNYATAAN AHLI WARIS</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>SURAT PENCATATAN PERKAWINAN</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>IZIN PENGGUNAAN TANAH MAKAM</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>PERPANJANGAN IZIN MAKAM (3 THN)</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>MUTASI PBB-P2 DIUPPRD</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>PERMOHONAN KERINGANAN PBB</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>SURAT KETERANGAN AHLI WARIS</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>PINDAH PENDUDUK KE DALAM</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
            <div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>KETERANGAN TANAH TIDAK SENGKETA</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>SURAT KETERANGAN RIWAYAT TANAH</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>SURAT PENCARI KERJA (KARTU KUNING)</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>SURAT KETERANGAN DOMISILI</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>SURAT KETERANGAN TIDAK BEKERJA</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>SURAT KETERANGAN TIDAK MAMPU</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>KETERANGAN BEDA NAMA/TGL/TAHUN</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>SURAT KETERANGAN KEMATIAN</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='mb-3'>
                                <Disclosure.Button className='bg-indigo-400 border-2 p-2 text-white w-full'>PINDAH PENDUDUK KELUAR</Disclosure.Button>
                            </div>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className='mb-3' static>
                                    Yes! You can purchase a license that you can share with your
                                    entire team.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}

export default Document