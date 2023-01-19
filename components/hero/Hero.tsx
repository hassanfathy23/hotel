import Image from "next/image";
import HeroHeader from "./Header";
import HeroList from "./List";

export default function Hero() {
    return (
        <div className="flex flex-col">
        <div className="w-full px-40 py-12 flex flex-row justify-between items-center bg-[#121212]">
            <HeroHeader />
            <HeroList />
        </div>
        <div className="w-full relative h-[565px]">
            <Image src='/images/Rectangle 3670.png' fill alt="image" className="object-cover" />
        </div>
        </div>
    )
}