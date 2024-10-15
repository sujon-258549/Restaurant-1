"use client"; // This directive is needed for React Server Components in Next.js 13+

import React from 'react';

interface HeadingProps {
    heading: string; 
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
    return (
        <div>
            <h1 className='text-3xl Merienda-font md:text-5xl lg:text-7xl font-bold'>
                {heading}
            </h1>
        </div>
    );
};

export default Heading;
