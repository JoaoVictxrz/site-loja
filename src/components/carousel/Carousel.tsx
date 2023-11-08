import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from "next/image";

export default function Carousel() {
    const slides = [

    ]
    return (
        <div>
            <section className="flex">
                <Image
                    src={'/imagem-1.png'}
                    alt="Imagem1"
                    width={1280}
                    height={620}
                />
                <Image
                    src={'/imagem-2.png'}
                    alt="Imagem2"
                    width={1280}
                    height={620}
                />
                <Image
                    src={'/imagem-3.png'}
                    alt="Imagem3"
                    width={1280}
                    height={620}
                />
                <Image
                    src={'/imagem-4.png'}
                    alt="Imagem4"
                    width={1280}
                    height={620}
                />
            </section>

        </div>
    )
}
