import { BiMenu } from "react-icons/bi";
import ListItem from "../list/list";
import { useState } from "react";
import { GoX } from "react-icons/go";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="">
            <nav className='w-full h-16 flex bg-sky-950'>
                <div className='w-full h-full flex justify-between items-center md:flex'>
                    <div className='pl-5'>LOGO</div>
                    <div className='hidden md:flex'>
                        <ul className='flex gap-10 pr-5'>
                            <ListItem name='HOME' url='/' />
                            <ListItem name='PRODUTOS' url='/' />
                            <ListItem name='CONTATOS' url='/' />
                            <ListItem name='SOBRE' url='/' />
                        </ul>
                    </div>
                </div>
                {/* Menu mobile */}
                <div onClick={toggleNavbar} className='md:hidden cursor-pointer flex items-center justify-center mr-4'>
                    <BiMenu size={40} />
                </div>
                <div className={
                    isOpen ? "fixed right-0 w-full md:hidden bg-sky-950 p-10 ease-in-out duration-500 "
                        : "fixed right-[-100%] w-[65%] p-10 ease-in-out duration-500 h-auto"
                }>
                    <div className='w-full'>
                        <div onClick={toggleNavbar} className='cursor-pointer text-white float-right'>
                            <GoX size={40} />
                        </div>
                        <div className='w-full h-full flex justify-center items-center'>
                            <ul className='flex flex-col gap-5 items-center justify-center'>
                                <ListItem name='HOME' url='/' />
                                <ListItem name='PRODUTOS' url='/' />
                                <ListItem name='CONTATOS' url='/' />
                                <ListItem name='SOBRE' url='/' />
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}