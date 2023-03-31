import React from 'react'

function Tentang_kami() {
    return (
        <>
            <div className='grid'>
                <div className='grid bg-gray-200 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='p-3'>
                        <div className='text-xl font-semibold'>LINGKUNGAN</div>
                        <div className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odit quas nisi quis tempore dolores nihil id magnam ad earum, modi, asperiores sit natus. Id aut obcaecati quod ea labore.</div>
                    </div>
                    <div className='shadow-xl'>
                        <img src="https://i.ibb.co/mBTKh3V/Untitled.png" alt="" />
                    </div>
                </div>
                <div className='grid bg-gray-200 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='shadow-xl'>
                        <img src="https://i.ibb.co/mBTKh3V/Untitled.png" alt="" />
                    </div>
                    <div className='p-3'>
                        <div className='text-xl font-semibold'>FUNGSI PENGURUS RT</div>
                        <div className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odit quas nisi quis tempore dolores nihil id magnam ad earum, modi, asperiores sit natus. Id aut obcaecati quod ea labore.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tentang_kami