import Image from 'next/image'

const OurCollection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-sky-400 to-indigo-600 text-white lg:p-[1.8rem] xl:p-[1.5rem]">

      {/* Desktop */}
      <div className="container hidden lg:flex items-center justify-between">
        <div className="w-[40%]">
          <h1 className="font-bold text-[1.5rem] mb-[20px] capitalize">our collection</h1>
          <p className="text-[.8rem]">
            Studio Ghibli is renowned for its impressive collection of animated films, which inspire and entertain audiences of all ages and backgrounds. From epic films like "Spirited Away" to heartwarming tales like "My Neighbor Totoro," each Ghibli work presents a magical world and deep characters. With themes spanning adventure, friendship, the wonder of nature, and more, the Studio Ghibli collection offers an unforgettable experience for viewers. Fans can enjoy a range of films that bring incredible imagination and stunning animation quality, making every visit to the Ghibli world an unforgettable adventure.
          </p>
        </div>

        <div className="relative overflow-visible w-[50%] h-[300px]">
          <Image src={'/char1.png'} width={150} height={150} alt='fire' className='absolute -top-[100px] left-0'/>
          <Image src={'/char4.png'} width={300} height={400} alt='howls-moving-castle' className='absolute -top-[100px] right-0 xl:-right-[100px]'/>
          <Image src={'/char2.png'} width={200} height={150} alt='spirited-away' className='absolute bottom-0 right-0'/>
          <Image src={'/char3.png'} width={200} height={150} alt='totoro' className='absolute bottom-0 left-0'/>
        </div>
      </div>
      {/* Desktop */}

      {/* Mobile */}
        <div className="relative p-[1.5rem] w-[100%] flex lg:hidden items-center justify-between">
          <div className="z-20 flex items-center justify-center">
            <div className="w-[100%] md:w-[60%] h-full p-[1.3rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
              <h1 className="font-bold text-[1rem] mb-[20px] capitalize">our collection</h1>
              <p className="text-[.7rem]">
                Studio Ghibli is renowned for its impressive collection of animated films, which inspire and entertain audiences of all ages and backgrounds. From epic films like "Spirited Away" to heartwarming tales like "My Neighbor Totoro," each Ghibli work presents a magical world and deep characters. With themes spanning adventure, friendship, the wonder of nature, and more, the Studio Ghibli collection offers an unforgettable experience for viewers. Fans can enjoy a range of films that bring incredible imagination and stunning animation quality, making every visit to the Ghibli world an unforgettable adventure.
              </p>
            </div>
          </div>

          <Image src={'/char4.png'} width={300} height={400} alt='howls-moving-castle' className='absolute -top-[100px] z-10'/>
        </div>
      {/* Mobile */}
    </section>
  )
}

export default OurCollection;