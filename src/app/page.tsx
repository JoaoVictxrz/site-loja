"use client"
import { FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa6";
import User from './user/page';
import CadastroMobile from './user/login/cadastro/page';
import Image from 'next/image';
import Timer from "@/components/timer/timer";

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
        <div className='w-full h-[1440px] bg-white flex flex-col'>
          <div className='ml-24 mt-28 flex justify-between' id='destaques'>
            <span className='font-bold text-5xl text-black'>Destaques</span>
            <div className='pr-[40px]'>
              <span className='text-zinc-600 font-bold text-5xl px-1 hover:text-black'><a href="#1">.</a></span>
              <span className='text-zinc-600 font-bold text-5xl px-1 hover:text-black'><a href="#2">.</a></span>
              <span className='text-zinc-600 font-bold text-5xl px-1 hover:text-black'><a href="#3">.</a></span>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="flex overflow-x-auto space-x-8 w-full h-[46rem] gap-32 scroll-smooth">
              <div className="flex justify-between text-black">
              </div>
              <div className="flex-shrink-0 h-[44rem]" id="1">
                <div className="flex flex-col items-center">
                  <Image
                    src='/produtos/polo1.png'
                    width={500}
                    height={500}
                    alt='CAMISA1'
                    className='w-[400px] h-[400px]'
                  />
                  <span className="text-black text-center font-semibold text-2xl">Camisa Polo Preta</span>
                  <span className="text-black text-center font-bold text-4xl">R$119,99</span>
                  <button className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700'>Comprar</button>
                </div>
              </div>
              <div className="flex-shrink-0 h-[44rem]" >
                <div className="flex flex-col items-center">
                  <Image
                    src='/produtos/polo2.png'
                    width={500}
                    height={500}
                    alt='CAMISA1'
                    className='w-[400px] h-[400px]'
                  />
                  <span className="text-black text-center font-semibold text-2xl">Camisa Polo Verde</span>
                  <span className="text-black text-center font-bold text-4xl">R$119,99</span>
                  <button className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700'>Comprar</button>
                </div>
              </div>
              <div className="flex-shrink-0 h-[44rem]">
                <div className="flex flex-col items-center">
                  <Image
                    src='/produtos/polo3.png'
                    width={500}
                    height={500}
                    alt='CAMISA1'
                    className='w-[400px] h-[400px]'
                  />
                  <span className="text-black text-center font-semibold text-2xl">Camisa Polo Vermelha</span>
                  <span className="text-black text-center font-bold text-4xl">R$119,99</span>
                  <button className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700'>Comprar</button>
                </div>
              </div>
              <div className="flex-shrink-0 h-[44rem]">
                <div className="flex flex-col items-center">
                  <Image
                    src='/produtos/polo4.png'
                    width={500}
                    height={500}
                    alt='CAMISA1'
                    className='w-[400px] h-[400px]'
                  />
                  <span className="text-black text-center font-semibold text-2xl">Camisa Polo Azul</span>
                  <span className="text-black text-center font-bold text-4xl">R$119,99</span>
                  <button className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700'>Comprar</button>
                </div>
              </div>
              <div className="flex-shrink-0 h-[44rem]">
                <div className="flex flex-col items-center" id="2">
                  <Image
                    src='/produtos/polo5.png'
                    width={500}
                    height={500}
                    alt='CAMISA1'
                    className='w-[400px] h-[400px]'
                  />
                  <span className="text-black text-center font-semibold text-2xl">Camisa Polo Verde</span>
                  <span className="text-black text-center font-bold text-4xl">R$119,99</span>
                  <button className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700'>Comprar</button>
                </div>
              </div>
              <div className="flex-shrink-0 h-[44rem]">
                <div className="flex flex-col items-center">
                  <Image
                    src='/produtos/polo6.png'
                    width={500}
                    height={500}
                    alt='CAMISA1'
                    className='w-[400px] h-[400px]'
                  />
                  <span className="text-black text-center font-semibold text-2xl">Camisa Polo Limão</span>
                  <span className="text-black text-center font-bold text-4xl">R$119,99</span>
                  <button className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700'>Comprar</button>
                </div>
              </div>
              <div className="flex-shrink-0 h-[44rem]">
                <div className="flex flex-col items-center">
                  <Image
                    src='/produtos/polo7.png'
                    width={500}
                    height={500}
                    alt='CAMISA1'
                    className='w-[400px] h-[400px]'
                  />
                  <span className="text-black text-center font-semibold text-2xl">Camisa Polo Cinza</span>
                  <span className="text-black text-center font-bold text-4xl">R$119,99</span>
                  <button className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700'>Comprar</button>
                </div>
              </div>
              <div className="flex-shrink-0 h-[44rem]">
                <div className="flex flex-col items-center">
                  <Image
                    src='/produtos/polo8.png'
                    width={500}
                    height={500}
                    alt='CAMISA1'
                    className='w-[400px] h-[400px]'
                  />
                  <span className="text-black text-center font-semibold text-2xl">Camisa Polo Preta</span>
                  <span className="text-black text-center font-bold text-4xl">R$119,99</span>
                  <button className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700'>Comprar</button>
                </div>
              </div>
              <div className="flex-shrink-0 h-[44rem]">
                <div className="flex flex-col items-center" id="3">
                  <Image
                    src='/produtos/mangalonga.png'
                    width={500}
                    height={500}
                    alt='CAMISA1'
                    className='w-[400px] h-[400px]'
                  />
                  <span className="text-black text-center font-semibold text-2xl">Camisa Polo Manga Longa</span>
                  <span className="text-black text-center font-bold text-4xl">R$119,99</span>
                  <button className='bg-blue-400 w-64 h-16 rounded-2xl mt-3 font-semibold text-2xl flex items-center justify-center hover:bg-blue-700'>Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full h-[1440px]">
          <div>
            <Image
              src='/Camisa-polo-masculina.png'
              width={1440}
              height={14400}
              alt='CAMISA1'
            />
          </div>
          <div className="w-full bg-black flex flex-col pl-[10%] justify-center">
            <h1 className="font-bold text-6xl text-red-600">Promoção</h1> <br />
            <h2 className="font-semibold text-xl">Camisas Polos Masculina em até <br /><span className="font-bold text-7xl text-red-600
            ">20%</span> de desconto!</h2><br />
            <span className="text-xl">Ofertas valida até:</span>
            <Timer />
          </div>
        </div>
      </main >

    </div >

  )
}
