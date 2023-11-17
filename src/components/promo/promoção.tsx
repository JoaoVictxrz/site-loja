"UseClient";

import Image from "next/image"
import Timer from "../timer/timer"

export default function Promo() {
    return (
        <div className="m-10">
            <div className="flex justify-between w-full h-auto">
                <Image
                    src='/Camisa-polo-masculina.png'
                    width={1440}
                    height={500}
                    alt='CAMISA1'
                />
                <div className="w-full h-auto bg-zinc-950 flex flex-col pl-[10%] justify-center">
                    <h1 className="font-bold text-6xl text-red-600">Promoção</h1> <br />
                    <h2 className="font-semibold text-xl">Camisas Polos Masculina em até <br />
                        <span className="font-bold text-7xl text-red-600">20%</span> de desconto!</h2><br />
                    <span className="text-xl">Ofertas valida até:</span>
                    <Timer />
                </div>
            </div>
        </div>
    )
}