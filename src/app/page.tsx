"use client"
import { FaAngleUp } from "react-icons/fa6";
import User from './user/page';
import CadastroMobile from './user/login/cadastro/page';
import Image from 'next/image';

export default function Home() {
  return (
    <div >
      <main className='w-full h-[1920px] items-center flex flex-col'>
        <div>
          <div className="text-white fixed bottom-12 right-12 bg-sky-950 w-14 h-14 rounded-full flex items-center justify-center">
            <a href="#"><FaAngleUp /></a>
          </div>
        </div>
        <div className='h-[1440px] flex items-center justify-center'>
          <div className='flex flex-col mr-[30%]'>
            <span className='text-[60px] font-bold'>Mais que uma Loja,<br /> um estilo de vida</span> <br />
            <span className='text-[30px] font-semibold drop-shadow-2xl'>Quer você esteja apenas começando,<br /> tenha jogado a vida toda ou seja um profissional do jogo, <br />
              seu estilo em uma loja virtual.</span>
            <a href='#destaques' className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700 scroll-smooth'>
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
        <div className='w-full h-[1440px] bg-white flex flex-col'>
          <div className='ml-24 mt-28 flex justify-between' id='destaques'>
            <span className='font-bold text-5xl text-black'>Destaques</span>
            <div className='pr-[40px]'>
              <span className='text-zinc-600 font-bold text-5xl px-1 hover:text-black'><button>.</button></span>
              <span className='text-zinc-600 font-bold text-5xl px-1 hover:text-black'><button>.</button></span>
              <span className='text-zinc-600 font-bold text-5xl px-1 hover:text-black'><button>.</button></span>
            </div>
          </div>
          <div className='flex'>
            <div className='text-black'>
              PRODUTOS
            </div>

          </div>
        </div>
      </main>

      <footer>
      </footer>

    </div>

  )
}
