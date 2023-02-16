import React from 'react'
import { data } from '../mockData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'



export const Card = () => {

    const slideLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft -= 500
    }

    const slideRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft += 500
    }

    return (
        <>
            <div className="relative flex items-center">

                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 transition-all dark:text-white' size={50} onClick={slideLeft} />
                <div id="slider" className='flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smoth scrollbar-hide'>
                    {
                        data.map((item) => (
                            <img key={item.id} src={item.img} alt={item.info} className='h-[300px] inline-block p-2 cursor-pointer hover:scale-110 ease-in-out duration-300' />
                        ))
                    }
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 transition-all dark:text-white' size={50} onClick={slideRight} />
            </div>

            

        </>
    )
}
