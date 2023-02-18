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
    //al darle click, llevar al cliente a la pagina {item.src}
    const handleClick = (url) => {
        // console.log(e.target.src)}}
        window.open(url, '_blank')

    }

    return (
        <div className="relative flex items-center">
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 transition-all dark:text-white' size={50} onClick={slideLeft} />
            <div id="slider" className='flex sm:w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smoth scrollbar-hide '>
                {
                    data.map((item) => (
                        <img
                            key={item.id}
                            src={item.img}
                            alt={item.info}
                            onClick={() => handleClick(item.src)}
                            className='h-[400px] p-2 cursor-pointer hover:scale-110 ease-in-out duration-300 rounded-3xl'
                        />

                    ))
                }

            </div>
            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 transition-all dark:text-white' size={50} onClick={slideRight} />
        </div>
    )
}
