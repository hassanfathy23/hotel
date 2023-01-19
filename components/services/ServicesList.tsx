import Image from "next/image";
import ServicesItem from "./ServicesItem";
import RatingCard from "./RatingCard";

export default function ServicesList() {
  return (
    <div className="pl-40 py-14 mt-28 flex flex-row justify-between items-center">
      <div className="flex flex-col gap-16">
        <ServicesItem
          index={1}
          header="Provide the best choice of Room. "
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                     amet sint. Velit officia consequat."
        />
        <ServicesItem
          index={2}
          header="Provide the best choice of Room. "
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat."
        />
        <ServicesItem
          index={3}
          header="Provide the best choice of Room. "
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat."
        />
      </div>

      <div className="relative">
        <div className="relative w-[482px] h-[636px] self-start">
          <Image src="/images/Rectangle 3671.png" alt="image" fill />
        </div>
        <div className="absolute top-[35%] -left-56">
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
        <div className="absolute top-[20%] -left-32">
            <RatingCard name="Cody Fisher" rating={4} image="/images/Ellipse 18.png" />
        </div>
        <div className="absolute -bottom-8 left-[23%]">
            <RatingCard name="Cody Fisher" rating={4} image="/images/Ellipse 18.png" />
        </div>
      </div>
    </div>
  );
}
