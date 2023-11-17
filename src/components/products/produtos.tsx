import Image from "next/image"

export default function Produtos() {
    return (
        <div className='w-full bg-white flex flex-col pt-8 pb-4'>
            <div className='ml-24 flex justify-between' id='destaques'>
                <span className='font-bold text-5xl text-black'>Destaques</span>
                <div className='pr-[40px] '>
                    <span className='text-zinc-600 font-bold text-5xl px-1 hover:text-black'><a href="#1">.</a></span>
                    <span className='text-zinc-600 font-bold text-5xl px-1 hover:text-black'><a href="#2">.</a></span>
                    <span className='text-zinc-600 font-bold text-5xl px-1 hover:text-black'><a href="#3">.</a></span>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex overflow-x-auto space-x-8 w-full h-auto gap-32 scroll-smooth mt-16">
                    <div className="flex-shrink-0" id="1">
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
                    <div className="flex-shrink-0 ">
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
                    <div className="flex-shrink-0 ">
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
                    <div className="flex-shrink-0 ">
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
                    <div className="flex-shrink-0 ">
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
                    <div className="flex-shrink-0 ">
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
                    <div className="flex-shrink-0 ">
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
                    <div className="flex-shrink-0 ">
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
                    <div className="flex-shrink-0 ">
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
    )
}