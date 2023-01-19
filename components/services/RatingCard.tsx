import Image from "next/image";

type AppProps = {
  image: string;
  name: string;
  rating: number;
};

export default function RatingCard({ image, name, rating }: AppProps) {
  return (
    <div className="w-[212px] p-3 flex flex-row gap-3 bg-white shadow-xl shadow-black/10 rounded-xl">
      <Image src={image} width="41" height="41" alt="image" />
      <div className="flex flex-col gap-1">
        <h4 className="text-[#292929] text-[14px] font-bold leading-[133%]">
          {name}
        </h4>
        <p className="text-[#292929]/40 text-[12px] leading-[133%]">
          give rating <span className="text-[#FF7500]">{rating}</span>
        </p>
      </div>
    </div>
  );
}
