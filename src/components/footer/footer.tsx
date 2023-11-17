import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-slate-950 w-full" id="co">
            <div className="flex justify-beetwen items-center ml-24">
                <div className="text-center">
                    <h1 className="text-slate-600 p-3">Horário de Funcionamento: 08h as 11h30 - 13h as 17h30</h1>
                    <h1 className="text-slate-600 p-3">Nova Brasília, Aparecida de Goiânia-GO, 749430-530 </h1>
                    <h1 className="text-slate-600 p-3">Telefone: (62) 3535-1010</h1>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.155778621485!2d-49.344162624849055!3d-16.768923584016584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef78a4809babb%3A0x15949fddae1d2bf!2sAv.%20da%20Igualdade%20-%20Nova%20Bras%C3%ADlia%2C%20Aparecida%20de%20Goi%C3%A2nia%20-%20GO%2C%2074930-530!5e0!3m2!1spt-BR!2sbr!4v1700244807238!5m2!1spt-BR!2sbr"
                    width="500"
                    height="300"
                    loading="lazy"
                    className="m-8 -32 rounded-xl"
                ></iframe>
                <div className="flex items-center justify-between">
                    <div className="flex gap-5 flex-col ml-24 hover:underline ">
                        <a className="flex gap-2 items-center text-slate-600 text-xl" href="https://www.facebook.com/?locale=pt_BR" target="blank"> <FaFacebook /> Facebook</a>
                        <a className="flex gap-2 items-center text-slate-600 text-xl" href="https://www.instagram.com/" target="blank"> <FaInstagram />Instagram</a>
                        <a className="flex gap-2 items-center text-slate-600 text-xl" href="https://web.whatsapp.com/" target="blank"> <FaWhatsapp /> Whatsapp</a>
                        <a className="flex gap-2 items-center text-slate-600 text-xl" href="https://linkedin.com" target="blank"> <FaLinkedin />Linkedin</a>
                    </div>
                </div>
            </div>
        </div >
    )
}