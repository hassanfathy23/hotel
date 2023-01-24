import Image from "next/image";
import HeroHeader from "./Header";
import HeroList from "./List";

export default function Hero() {
    return (
        <div className="flex flex-col">
        <div className="w-full px-3 lg:px-40 py-12 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center bg-[#121212]">
            <HeroHeader />
            <HeroList />
        </div>
        <div className="w-full relative h-[565px]">
            <Image src='/images/Rectangle 3670.png' fill priority alt="image" className="object-cover" />
        </div>
        </div>
    )
}