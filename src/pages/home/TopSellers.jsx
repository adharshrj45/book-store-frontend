import React, { useEffect, useState } from 'react'
import BookCard from '../Books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/books/bookApi';

const category=["Choose a genre","Business","Fiction","Horror","Adventure"]

const Topsellers = () => {
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    const {data:books=[]}=useFetchAllBooksQuery()   //data is renamed to books 
    console.log(books)

    let filteredBooks = selectedCategory === "Choose a genre" ? 
    books : 
    books.filter(book=>book.category === selectedCategory.toLowerCase());

  return (
    <div className='py-10 xl:px-10'> 
    <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
    {/* Category Filtering */}
    <div className='mb-8 flex items-center'>
        <select 
        onChange={(e)=>setSelectedCategory(e.target.value)}
        name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-2 py-1 focus:outline-none'>
            {
                category.map((category,index)=>(
                    <option key={index} value={category}>{category}</option>
                ))
            }
        </select>
    </div>
    {/* Slider */}
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
        filteredBooks.length > 0 && filteredBooks.map((book,index)=>(
            <SwiperSlide key={index}><BookCard book={book}/></SwiperSlide>
        ))
        }
        
        
      </Swiper>

    
    </div>
  )
}

export default Topsellers
