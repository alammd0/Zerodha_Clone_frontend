import Link from "next/link";
import { infoSections } from "@/data/Confidence";
import Universe from "./home/Universe";
import Image from "next/image";

export default function HomePage(){
    return (
       <div className="flex gap-10 flex-col">
            {/* hero section */}
            <div className="flex items-center justify-center flex-col gap-10">
                {/* top section */}
                <div>
                    <Image src="https://zerodha.com/static/images/landing.svg" alt="hero" width={800} height={500} />
                </div>

                {/* button section */}~
                <div className="flex flex-col gap-6 items-center justify-center">
                    <h1 className="text-4xl font-semibold text-gray-500">Invest in everything</h1>
                    <p className="text-xl font-normal text-gray-500">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className="bg-[#387ED1] px-6 py-3 rounded-md hover:bg-gray-700 transition-all duration-200">
                        <Link href="/signup" className="text-2xl font-semibold text-white">
                            Sign up for free
                        </Link>
                    </button>
                </div>
            </div>

            {/* confidence section */}
            <div className="flex justify-between items-center gap-10 mt-[42px]">

                <div className="max-w-1/3 w-full space-y-8">

                    <h1 className="text-2xl font-medium text-gray-600">Trust with confidence</h1>

                    <div className="flex flex-col gap-8">
                        {
                            infoSections.map((item, index) => (
                                <div key = {index}>
                                    <Universe 
                                        heading={item.title}
                                        description={item.description}
                                    />
                                </div>
                            ))   
                        }
                    </div>


                </div>

                <div className="max-w-1/2 w-full mt-10">
                    <div>
                        <Image src="/ecosystem.png" alt="hero" width={800} height={500} />
                    </div>

                    <div className="flex items-center justify-center gap-20">
                        <Link className="text-[#387ED1] hover:text-black text-xl" href="/products" >
                            Explore our products
                        </Link>

                        <Link className="text-[#387ED1] hover:to-black text-xl" href="/signup">
                            Try Kite demo
                        </Link>
                    </div>
                </div>
            </div>
       </div>
    )
}