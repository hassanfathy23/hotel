import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="h-[681px] px-4 lg:pl-40 py-4 mt-28 flex flex-col md:flex-row gap-4 md:gap-0 justify-between bg-[#121212]">
      <div className="w-full md:w-[377px] flex flex-col gap-10 self-center">
        <h2 className="text-[45px] text-[#FFFFFF] font-bold leading-[133%]">
          <span className="pb-3 border-b-4 border-b-[#FF7500]">ABOUT </span>
          <span>US</span>
        </h2>
        <p className="text-[18px] text-white/40 font-medium">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim.
        </p>
        <p className="text-[18px] text-white/40 font-medium">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
        <button className="w-fit py-4 px-12 text-white text-[16px] font-medium bg-[#FF7500] rounded-3xl">Explore</button>
      </div>
      <div className="relative w-full md:w-[592px] h-full">
      <Image src="/images/Rectangle 3681.png" fill alt="image" />
      </div>
    </div>
  );
}
