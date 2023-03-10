import Image from "next/image";
import ServicesItem from "./ServicesItem";
import RatingCard from "./RatingCard";

export default function ServicesList() {
  return (
    <div className="w-full px-4 xl:pl-40 py-14 mt-28 flex flex-col md:flex-row gap-12 xl:gap-0 justify-between items-center">
      <div className="flex flex-col gap-16">
        <ServicesItem
          index={1}
          header="Provide the best choice of Room. "
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                     amet sint. Velit officia consequat."
        />
        <ServicesItem
          index={2}
          header="Low price with Best Quality"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat."
        />
        <ServicesItem
          index={3}
          header="Restaurant Service"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat."
        />
      </div>

      <div className="w-full lg:w-fit relative">
        <div className="relative w-full md:w-[482px] h-[636px]">
          <Image src="/images/Rectangle 3671.png" alt="image" fill />
        </div>
        <div className="absolute top-[35%] md:-left-56 md:hidden xl:block">
          <Image
            src="/images/Rectangle 3672.png"
            width="439"
            height="219"
            alt="image"
          />
        </div>
        <div className="absolute -top-8 left-[23%]">
            <RatingCard name="Cody Fisher" rating={4} image="/images/Ellipse 18.png" />
        </div>
        <div className="absolute top-[20%] md:top-[25%] lg:top-[20%] left-[0%] md:-left-32">
            <RatingCard name="Albert Flores" rating={4} image="/images/Ellipse 19.png" />
        </div>
        <div className="absolute -bottom-8 left-[23%]">
            <RatingCard name="Devon Lane" rating={4} image="/images/Ellipse 20.png" />
        </div>
      </div>
    </div>
  );
}
