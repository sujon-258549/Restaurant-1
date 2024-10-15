import React from 'react'
import Hading from '../../Conponect/Common/Hading'
import Image from 'next/image'
const Menu = () => {
    return (

        <section className='max-w-6xl mx-auto px-5 pt-10 pb-20 md:pt-20 md:pb-32 lg:pt-32 lg:pb-44'>
            <>
                <div className='flex justify-center'>
                    <Hading heading='Mesu'></Hading>
                </div>
                <Image className='mx-auto' width={80} height={100} src="/logo/common.png" alt="" />
            </>
            <div className='pt-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='relative'>
                    <img src="/menu/1.jpg" alt="" />
                    <div>

                        <div className='bg-[#ffffffa2] left-0 top-16 py-3 rounded-r-[10px] px-5 text-black text-xl font-bold absolute'>Sushi & Sashimi</div>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/menu/2.jpg" alt="" />
                    <div>

                        <div className='bg-[#ffffffa2] left-0 top-16 py-3 rounded-r-[10px] px-5 text-black text-xl font-bold absolute'>Sushi & Sashimi</div>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/menu/3.jpg" alt="" />
                    <div>

                        <div className='bg-[#ffffffa2] left-0 top-16 py-3 rounded-r-[10px] px-5 text-black text-xl font-bold absolute'>Sushi & Sashimi</div>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/menu/4.jpg" alt="" />
                    <div>

                        <div className='bg-[#ffffffa2] left-0 top-16 py-3 rounded-r-[10px] px-5 text-black text-xl font-bold absolute'>Sushi & Sashimi</div>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/menu/5.jpg" alt="" />
                    <div>

                        <div className='bg-[#ffffffa2] left-0 top-16 py-3 rounded-r-[10px] px-5 text-black text-xl font-bold absolute'>Sushi & Sashimi</div>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/menu/1.jpg" alt="" />
                    <div>

                        <div className='bg-[#ffffffa2] left-0 top-16 py-3 rounded-r-[10px] px-5 text-black text-xl font-bold absolute'>Sushi & Sashimi</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
