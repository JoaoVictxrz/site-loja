"use client"
import { FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa6";
import Image from 'next/image';
import Footer from "@/components/footer/footer";
import Promo from "@/components/promo/promoção";
import Produtos from "@/components/products/produtos";

export default function Home() {
  return (
    <div >
      <main className='w-full h-auto items-center flex flex-col mt-20'>
        <div>
          <div className="text-white fixed bottom-12 right-12 bg-sky-950 w-14 h-14 rounded-full flex items-center justify-center">
            <a href="#"><FaAngleUp /></a>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col mr-[30%]'>
            <span className='text-[60px] font-bold'>Mais que uma Loja,<br /> um estilo de vida</span> <br />
            <span className='text-[30px] font-semibold drop-shadow-2xl'>Quer você esteja apenas começando,<br /> tenha jogado a vida toda ou seja um profissional do jogo, <br />
              seu estilo em uma loja virtual.</span>
            <a href='#destaques' className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700 '>
              Confira Já
            </a>
          </div>
          <div>
            <Image
              src='/pngwing.com (1).png'
              width={750}
              height={500}
              alt='Picture'
              className='drop-shadow-2xl'
            />
          </div>
        </div>
        <div className="w-[100%] h-auto">
          <Produtos />
        </div>
        <div>
          <Promo />
        </div>
      </main >
      <footer className="w-full h-auto">
        <Footer />
      </footer>
    </div >

  )
}
