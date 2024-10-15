import React from 'react'
import Heading from '../Common/Hading'
import Image from 'next/image'
const SpecialMenu = () => {


    interface SuperMenu {
        name: string;
        price: number;
        description: string;
        weight: string;
    }

    const supermenus: SuperMenu[] = [
        {
            name: "Ebi curry udon",
            price: 9.54,
            description: "Tempura shrimp, udon noodles, curry, green onions.",
            weight: "320/180 g"
        },
        {
            name: "Set of pork yakininku",
            price: 8.65,
            description: "Pork in ginger sauce, mayonnaise sauce, zukemno, salad.",
            weight: "160/180 g"
        },
        {
            name: "Pork ribs",
            price: 6.76,
            description: "Pork ribs, potatoes, rice with vegetables, miso soup.",
            weight: "220/180 g"
        },
        {
            name: "Pasta with shrimps",
            price: 7.54,
            description: "Spaghetti, cream sauce, tomato sauce, shrimps, garlic.",
            weight: "310/180 g"
        },
        {
            name: "Teppan kimchi chicken",
            price: 10.24,
            description: "Chicken, kimchi cabbage, soy sprouts, green onions, egg.",
            weight: "320/180 g"
        },
        {
            name: "Sushi set",
            price: 9.74,
            description: "Sushi, Tempura dragon roll, Spayshi shima-aji sankaku roll.",
            weight: "120/100 g"
        },
        {
            name: "Udon set with duck",
            price: 8.29,
            description: "Udon noodles, duck, cabbage, green onions, Yuzu citrus.",
            weight: "590/150 g"
        },
        {
            name: "Doria with shrimps",
            price: 10.86,
            description: "Shrimps, cheese, béchamel sauce, tomato sauce.",
            weight: "320/180 g"
        },
        {
            name: "Gratin with sea bass",
            price: 6.85,
            description: "Sea bass, bacon, gratin sauce, mushrooms, onion.",
            weight: "230/180 g"
        },
        {
            name: "Tonkatsu set",
            price: 5.69,
            description: "Breaded pork, mix salad, mustard sauce, tonkatsu sauce.",
            weight: "200/180 g"
        },
        {
            name: "Lunch mackerel miso",
            price: 11.52,
            description: "Mackerel, rice, zukemono, chuka salad, miso soup.",
            weight: "150/180 g"
        },
        {
            name: "Vegetable saute lunch",
            price: 8.29,
            description: "Fried vegetables, rice with vegetables, miso soup.",
            weight: "200/180 g"
        }
    ];



    return (
        <section className='max-w-6xl mx-auto px-5'>
            <>
                <div className='flex justify-center'>
                    <Heading heading='Sushi & Sashimi'></Heading>
                </div>
                <Image className='mx-auto' width={80} height={100} src="/logo/common.png" alt="" />
            </>

            <div>

                {
                    supermenus.map((suppermenu, index) => (
                        <div key={index}>
                            <div className='flex justify-between'>
                                <h4 className='text-xl font-bold'>{suppermenu.name}</h4>
                                <div className='borde-2r border-dotted'></div>
                                <h4 className='text-xl font-bold'>{suppermenu.price}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SpecialMenu
