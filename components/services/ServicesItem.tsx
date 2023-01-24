
type AppProps = {
    index: number;
    header: string;
    content: string
}

export default function ServicesItem({index, header, content}: AppProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-fit px-5 py-2 flex justify-center items-center text-white text-[24px] font-semibold bg-[#FF7500] rounded-full">{index}</div>
            <h3 className="text-[#292929] text-[24px] font-bold leading-[133%]">{header}</h3>
            <p className="w-full md:w-[475px] text-[#292929]/40 text-[16px] font-medium leading-[175%]">{content}</p>
        </div>
    )
}