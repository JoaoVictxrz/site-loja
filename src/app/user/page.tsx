export default function user() {
    return (
        <div className="w-full h-screen">
            <div>
                <div className=" w-[300px ]h-auto border-[2px] border-l-zinc-600/30 m-8">
                    <div className="flex flex-col gap-2 m-16">
                        <div>
                            <span className="text-zinc-600 font-semibold text-[24px]">Cadastro</span>
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
    )
}