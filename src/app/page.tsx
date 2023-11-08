"use client"
import Carousel from '@/components/carousel/Carousel';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className='w-full h-screen flex flex-col items-center justify-center'>
        <div>
          <Carousel />
        </div>
        <div className=' w-[95%] h-full mt-7'>

        </div>
      </main>

      <footer>
      </footer>
    </div>

  )
}
