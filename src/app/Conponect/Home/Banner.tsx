import React from 'react'
import Heading from '../Common/Hading'
import Link from 'next/link'
import Button from '../Common/Button'
// import RotatingText from '../Scorl/RotatingText'


const Banner = () => {
    return (
        <div>
            <section className='max-w-6xl mx-auto px-5'>



{/* <RotatingText></RotatingText> */}




























                <div className="">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/3">
                            <div className="lg:max-w-lg">
                                <Heading heading={'Japanese Restaurant'}></Heading>

                                <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">
                                    We try to show you all the variety of Japanese cuisine and its current trends.
                                </p>
                                <div className='max-w-[240px] pt-10'>

                                    <Link href={'#'}>
                                        <Button commonButton='Book a table'></Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/3">
                            {/* <Image
                            width={100}
                            height={100}
                                className="w-full h-full lg:max-w-3xl"
                                src="banner/banner.png"
                                alt="Catalogue-pana.svg"
                            /> */}
                            <img
                                className=' h-[300px] md:h-[650px] -mr-20 w-[1000px]'
                                src="/banner/banner.png"
                                alt="Banner Image"
                            />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Banner
