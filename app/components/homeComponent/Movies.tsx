'use client'
import React, { useEffect, useState } from 'react'
import { getAllMovieList } from "@/app/utils/data";
import { ImageCard } from '../Cards';
import Link from 'next/link'

interface Movie {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}

const Movies = () => {

  // const [allMovies, setAllMovies] = useState();
  const [allMovies, setAllMovies] = useState<Movie[] | undefined>();
  useEffect(() => {
    async function fetchAllMovies() {
      try {
        const movies = await getAllMovieList();
        setAllMovies(movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    
    fetchAllMovies();
  }, [])

  return (
    <section className='py-[2.5rem] w-full max-h-[800px] overflow-y-auto bg-center bg-cover' style={{
      backgroundImage: 'url("/kiki-wallpaper.jpg")',
      scrollbarWidth: 'none', // Firefox
      '&::-webkit-scrollbar': {
        display: 'none' // Chrome, Safari, Opera
      }
    }}>
      <div className="container md:px-[30px] xl:px-0">
        <div className="flex flex-col items-center gap-[20px] md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-[20px]">
        {
          allMovies && allMovies.map((item) => (
            <ImageCard key={item.id} title={item.title} description={item.description} releaseDate={item.release_date} image={item.image} id={item.id}/>
          ))
        }
        </div>

        {/* <div className="flex items-center justify-center mt-[50px]">
          <Link href='/movies' className='py-[10px] px-[30px] rounded-[10px] text-white bg-blue-800'>All movies</Link>
        </div> */}
      </div>
    </section>
  )
}

export default Movies