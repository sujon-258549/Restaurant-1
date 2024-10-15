import React from 'react'
import Image from 'next/image'
import './servises.css'
const Servises = () => {
    return (


        <section className='max-w-6xl mx-auto px-4'>
            <div className='flex  justify-between'>
                <div>
                    <div className="card wallet">
                        <div className="overlay"></div> {/* Ensure this is styled properly */}
                        <div className="circle">
                            <Image style={{zIndex:'999'}} src="/servises/supla.png" width={400} height={400} alt="Description of the image" />

                        </div>
                           <p className='text-xl z-50 pt-8 md:text-[20px] font-semibold serch-front'>Authentic Cuisine</p>
                    </div>
                </div>
                <div>
                    <div className="card wallet">
                        <div className="overlay"></div> {/* Ensure this is styled properly */}
                        <div className="circle">
                            <Image style={{zIndex:'999'}} src="/servises/fesh.png" width={100} height={100} alt="Description of the image" />

                        </div>
                           <p className='text-xl z-50 pt-8 md:text-[20px] font-semibold serch-front'>Fresh Products</p>
                    </div>
                </div>
                <div>
                    <div className="card wallet">
                        <div className="overlay"></div> {/* Ensure this is styled properly */}
                        <div className="circle">
                            <Image style={{zIndex:'999'}} src="/servises/trak.png" width={100} height={100} alt="Description of the image" />

                        </div>
                        <p className='text-xl z-50 pt-8 md:text-[20px] font-semibold serch-front'>Home Delivery</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Servises
