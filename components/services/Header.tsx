export default function Header() {
  return (
    <div className="px-4 md:px-40 mx-auto mt-40 flex flex-col items-center text-center gap-4">
      <h1 className="text-[25px] md:text-[45px] font-bold">
        Why You Should <span className="text-[#FF7500]">Stay Here</span>
      </h1>
      <p className="w-full md:w-[475px] text-[16px] text-[#292929]/60 font-medium leading-[170%]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat.
      </p>
    </div>
  );
}
