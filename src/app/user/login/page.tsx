export default function login() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="hidden md:flex">
                <div className="w-auto h-auto flex items-center justify-between bg-white rounded-lg">
                    <div className="flex flex-col m-24 gap-2">
                        <div>
                            <span className="text-zinc-600 font-semibold text-[24px] ml-2">Entrar</span>
                        </div>
                        <input type="text" placeholder="Usuário ou email" className="w-auti h-10 p-2 rounded-md border-[1px] border-cyan-400" />
                        <input type="password" placeholder="Insira sua senha" className="w-auto h-10 p-2 rounded-md border-[1px] border-cyan-400" />
                        <div className="text-black">
                            <button className="w-[300px] h-10 bg-cyan-800 text-white hover:bg-cyan-600 rounded-md">Registrar</button>
                        </div>
                    </div>
                    <div>
                        <div className=" w-[300px ]h-auto border-[2px] border-l-zinc-600/30 m-8">
                            <div className="flex flex-col gap-2 m-16">
                                <div>
                                    <span className="text-zinc-600 font-semibold text-[24px] ml-2">Cadastro</span>
                                </div>
                                <input type="text" placeholder="Apelido" className="w-auti h-10 p-2 rounded-md border-[1px] border-cyan-400" />
                                <input type="text" placeholder="Insira seu email" className="w-auti h-10 p-2 rounded-md border-[1px] border-cyan-400" />
                                <input type="text" placeholder="Confirme seu email" className="w-auti h-10 p-2 rounded-md border-[1px] border-cyan-400" />
                                <input type="password" placeholder="Insira sua senha" className="w-auto h-10 p-2 rounded-md border-[1px] border-cyan-400" />
                                <input type="password" placeholder="Confirme sua senha" className="w-auto h-10 p-2 rounded-md border-[1px] border-cyan-400" />
                                <div className="text-black">
                                    <button className="w-[300px] h-10 bg-cyan-800 text-white hover:bg-cyan-600 rounded-md">Registrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu mobile */}
            <div className="md:hidden">
                <div className="w-[500px] h-[500px] flex items-center justify-between bg-white rounded-lg">
                    <div className="flex flex-col gap-2 w-full h-auto p-5 ml-5">
                        <div>
                            <span className="text-zinc-600 font-semibold text-[24px] m3">Entrar</span>
                        </div>
                        <input type="text" placeholder="Usuário ou email" className="w-[90%] h-10 p-2 rounded-md border-[1px] border-cyan-400" />
                        <input type="password" placeholder="Insira sua senha" className="w-[90%] h-10 p-2 rounded-md border-[1px] border-cyan-400" />
                        <div className="flex justify-between">
                            <button className="w-[100px] h-10 bg-cyan-800 text-white hover:bg-cyan-600 rounded-md mr-3">Entrar</button>
                            <button className=" text-cyan-400 underline mr-12">Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}