import React from 'react';

const Images = (props) => {
    const { data, onClick } = props;

    const handleClickImage = (index) => {
        onClick(index);
    };

    return (
        <div className='grid grid-cols-3 grid-row-start-4 justify-items-center lg:gap-2'>
            {data.map((slide, index) => (
                <div
                    onClick={() => handleClickImage(index)}
                    key={index}
                    className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden mt-1000'
                >
                    <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={slide.src} alt={slide.description} />
                </div>
            ))}
        </div>
    );
};

export default Images;