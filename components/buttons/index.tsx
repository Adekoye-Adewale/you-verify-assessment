import Link from "next/link";

type ButtonProps = {
        href: string;
        title: string;
        color?: string;
}

export const PriButton = ({ href, title }: ButtonProps ) =>{
        return (
                <Link 
                        href={href}
                        title={title}
                        className="uppercase text-[10px] md:text-sm py-2 px-5 md:py-7.25 md:px-15.5 text-white bg-[#003EFF] border border-[#003EFF] rounded-full hover:bg-white hover:text-[#003EFF] transition-all duration-300"
                >
                        {title}
                </Link>
        )
}

export const SecButton = ({ href, title, color }: ButtonProps ) =>{
        return (
                <Link 
                        href={href}
                        title={title}
                        className={`uppercase text-[10px] md:text-sm py-2 px-5 md:py-7.25 md:px-15.5 bg-white border border-[#E3E6EF] rounded-full hover:bg-[#697598] hover:text-white transition-all duration-300 ${color ? color : 'text-[#697598]'}`}
                >
                        {title}
                </Link>
        )
}
