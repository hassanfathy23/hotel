import Image from "next/image";

type AppProps = {
    image: string;
    numberOfGuests: number;
    header: string;
    full?: boolean
}

export default function GalleryItem({image, numberOfGuests, header, full}: AppProps) {
    return (
        <div className={`w-60 md:w-full ${full ? 'md:row-span-2': ''} flex flex-col gap-2`}>
            <div className={`relative w-full ${full ? "h-[222px] md:h-full": "h-[222px]"} object-cover`}>
            <Image src={image} fill alt="image" />
            </div>
            <p className="text-[14px] text-[#292929]/60 font-medium leading-[133%]">{numberOfGuests} Guests</p>
            <h3 className="text-[#292929] text-[22px] font-semibold">{header}</h3>
        </div>
    )
}