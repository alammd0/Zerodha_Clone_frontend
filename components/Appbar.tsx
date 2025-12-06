import Image from "next/image";
import { navItems } from "@/data/Appbar";
import Link from "next/link";


export default function Appbar(){
    return (
        <div className="px-2 py-5 border-b-2 border-gray-300">
            <div className="max-w-9/12 mx-auto flex items-center justify-between">
                <div className="hover:cursor-pointer">
                    <Image src="https://zerodha.com/static/images/logo.svg" alt="Logo" width={150} height={50} />
                </div>

                <div className="flex items-center justify-center gap-10">
                    {
                        navItems.map((item, index) => (
                            <Link className="text-[16px] font-normal font-sans hover:text-[#387ED1] hover:text-shadow-2xs transition duration-200" href={item.path} key={index}>
                                {item.label}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}