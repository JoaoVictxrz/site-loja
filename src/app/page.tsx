"use client"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './user/page';
import CadastroMobile from './user/login/cadastro/page';

export default function Home() {
  return (
    <div>
      <main className='w-full h-[1920px] justify-between items-center flex flex-col'>
        <div className='h-[1440px] flex items-center justify-center pl-[8%]'>
          <div className='flex flex-col mr-[30%]'>
            <span className='text-[60px] font-bold'>Mais que um jogo,<br /> um estilo de vida</span> <br />
            <span className='text-[30px] font-semibold'>Quer você esteja apenas começando,<br /> tenha jogado a vida toda ou seja um profissional do jogo, <br />
              seu estilo em uma loja virtual.</span>
            <button className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-lg hover:bg-blue-700'>
              Confira Já
            </button>
          </div>
        </div>
        <div className='w-full h-[1440px] bg-white flex flex-col'>
          <div className='ml-24 mt-28 flex justify-between'>
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
