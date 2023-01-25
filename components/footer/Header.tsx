export default function FooterHeader() {
  return (
    <div className="w-[350px] flex flex-col md:self-start gap-4 text-center ">
      <h2 className="text-[28px] text-white font-semibold leading-[162.5%] ">
        Get In Touch
      </h2>
      <p className="text-[16px] text-white/30 font-medium leading-[162.5%] ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </p>
      <div className="w-full flex flex-row ">
        <input type="email" placeholder="Enter Email" className=" py-4 indent-5 flex-1 border-y-2 border-l-2 border-white placeholder-white/30 text-white text-[12px] bg-[#121212] rounded-bl-xl rounded-tl-xl " />
        <button className="px-6 py-4 border-y-2 border-r-2 border-[#FF6B00] text-white bg-[#FF6B00] rounded-br-xl rounded-tr-xl text-[12px] font-semibold ">Subscribe</button>
      </div>
    </div>
  );
}
