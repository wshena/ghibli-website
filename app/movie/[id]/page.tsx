'use client'
import { getMovieDataById, getCharDataFromMovieDetail } from '@/app/utils/data';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { AngleLeft } from '@/app/utils/Icons';
import axios from 'axios'

interface MovieDetail {
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

interface Characters {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films: string[];
  species: string;
  url: string;
}

const Page = ({ params }: { params: { id: string } }) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | undefined>();
  const [characters, setCharacters] = useState<Characters[] | undefined>();
  
  useEffect(() => {
    async function fetchMovieData() {
      try {
        const movie = await getMovieDataById(params.id);
        setMovieDetail(movie);

      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    
    fetchMovieData();
  }, [])
  
  
  useEffect(() => {
    const peopleArray = movieDetail?.people || [];
  
    async function getCharactersData() {
      try {
        const charactersData = await Promise.all(
          peopleArray.map(async (url: string) => {
            const response = await getCharDataFromMovieDetail(url);
            return response;
          })
        );
        setCharacters(charactersData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    getCharactersData();
  }, [movieDetail]);

  return (
    <>
      {
        !movieDetail && (
          <div className="w-full mt-[80px]">
            <h1>loading</h1>
          </div>
        )
      }
      {
        movieDetail && (
          <div className='w-full mt-[80px]'>
            <div className="relative w-full bg-center bg-cover bg-opacity-70" style={{
            backgroundImage: `url("${movieDetail.movie_banner}")`
          }}>
              <div className="asbolute py-[5rem] top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
                <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white border border-gray-200 p-[1rem] md:p-[2rem]">
                  <Link href='/' className='flex items-center mb-[20px]'>
                    <AngleLeft size={25} color='white' />
                    <span>Back</span>
                  </Link>
                  <div className="flex flex-col gap-[20px] md:gap-0 md:flex-row items-center md:items-start justify-between">
                    <div className="">
                      <Image src={movieDetail.image} alt='' width={200} height={200} />
                    </div>

                    <div className="w-full md:pl-[30px]">
                      <h1 className='text-[.9rem] md:text-[1.2rem]'>Title: {movieDetail.title} ({movieDetail.original_title_romanised})</h1>
                      <h1 className='text-[.9rem] md:text-[1.2rem]'>Director: {movieDetail.director}</h1>
                      <h1 className='text-[.9rem] md:text-[1.2rem]'>Producer: {movieDetail.producer}</h1>
                      <h1 className='text-[.9rem] md:text-[1.2rem]'>Release Date: {movieDetail.release_date}</h1>
                      <h1 className='text-[.9rem] md:text-[1.2rem]'>Rating: {movieDetail.rt_score}</h1>
                      <div className="flex flex-col gap-[10px] mt-[10px]">
                        <h2 className='text-[.9rem] md:text-[1.2rem]'>Sinopsis:</h2>
                        <p className='text-[.8rem] md:text-[1rem]'>{movieDetail.description}</p>
                      </div>

                      {
                        characters?.length === 1 ? ('') : (
                          <div className="mt-[10px]">
                            <h1 className='text-[.9rem] md:text-[1.2rem] mb-[10px]'>Characters: </h1>
                            <div className="grid grid-cols-2 gap-[15px]">
                              {
                                characters?.map((item, idx) => {
                                  return (
                                    <div className="flex flex-col" key={idx}>
                                      <h3 className='text-[.8rem]'>Name: {item.name}</h3>
                                      <h3 className='text-[.8rem]'>Gender: {item.gender}</h3>
                                      <h3 className='text-[.8rem]'>Age: {item.age}</h3>
                                    </div>
                                  )
                                })
                              }
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Page;
