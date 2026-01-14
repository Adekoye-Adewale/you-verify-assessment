'use client'
import { usePathname } from "next/navigation";
import { menuItems } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

type NavItemProps = {
        key?: number;
        icon: string;
        title: string;
        link: {
                href: string;
                title: string;
        }
}

export default function SideNav() {

        const [ isOpen, setIsOpen ] = useState(true)

        const handleMenuToggle = () => {
                setIsOpen(!isOpen);
        }

        return (
                <>
                        <div 
                                className="fixed bottom-5 left-2.5 lg:hidden z-40 py-0.5 px-2.5 text-[#272930] bg-[#003EFF]/60 hover:bg-[#373b47]/60 transition-all duration-450 backdrop-blur-xs rounded-full border border-[#373b47] text-xs cursor-pointer"
                                onClick={handleMenuToggle}
                        >
                                <span>
                                        menu
                                </span>
                        </div>
                        <div className={`fixed lg:sticky top-0 left-0 py-10 px-4 md:px-6 w-full min-w-55 max-w-70 h-dvh bg-white z-10 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                                <div className="flex flex-col gap-10">
                                        <div>
                                                <Logo />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                                {menuItems.map((item) => (
                                                        <Fragment key={item.id}>
                                                                <NavItem 
                                                                        icon={item.icon}
                                                                        title={item.title}
                                                                        link={item.link}
                                                                />
                                                        </Fragment>
                                                ))}
                                        </div>
                                </div>
                        </div>
                </>
        )
}

const Logo = () => {
        return (
                <Image 
                        src={'/icons/logo.svg'}
                        alt={'One Logo'}
                        title={'One Logo'}
                        width={9}
                        height={24}
                />
        )
}

const NavItem = ({ icon, title, link }: NavItemProps ) => {

        const pathname = usePathname();

        return (
                <Link 
                        href={link.href} 
                        title={link.title}
                        className={`py-3.5 px-4 flex gap-2 items-center justify-start rounded-3xl border-solid border-2 ${pathname === link.href ? 'border-[#E0E0E0]' : 'border-transparent'} hover:bg-[#E0E0E0] transition-all duration-300`}
                >
                        <span 
                                title={title} 
                                // className="basis-4 md:basis-6 shrink-0 size-6"
                        >
                                <Image 
                                        src={icon}
                                        alt={title}
                                        title={title}
                                        width={24}
                                        height={24}
                                />
                        </span>
                        <span className="text-nowrap text-[14px]">
                                {title}
                        </span>
                </Link>
        )
}