import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-slate-950 w-full">
            <div className="flex items-center justify-between">
                <div className="flex gap-5">
                    <a className="flex gap-2 items-center"> <FaFacebook /> Facebook</a>
                    <a className="flex gap-2 items-center"> <FaInstagram />Instagram</a>
                    <a className="flex gap-2 items-center"> <FaWhatsapp /> Whatsapp</a>
                    <a className="flex gap-2 items-center"> <FaLinkedin />Linkedin</a>
                </div>
                <div>
                    <h2>Map</h2>
                </div>
            </div>
        </div >
    )
}