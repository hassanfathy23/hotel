import { Icon } from "@iconify/react";
import ImagesList from "./ImagesList";

export default function InteriorDescription() {
  return (
    <div className="self-center w-[349px] flex flex-col gap-16">
      <div>
      <h3 className="text-[#292929] text-[32px] font-bold leading-[133%]">
        CLASSIC ROOMS AND INTERIOR
      </h3>
        <div className="flex flex-row">
          <Icon icon="material-symbols:star" color="#de8f32" />
          <Icon icon="material-symbols:star" color="#de8f32" />
          <Icon icon="material-symbols:star" color="#de8f32" />
          <Icon icon="material-symbols:star" color="#de8f32" />
          <Icon icon="material-symbols:star" color="#de8f32" />
        </div>
        <p className="text-[18px] text-[#292929]/60 font-medium leading-[166%] ">
          Excellent 5000+reviews
        </p>
      </div>

      <div className="flex flex-col gap-2 ">
        <ImagesList />
        <p className="text-[#292929]/60 text-[18px] font-medium leading-[162.5%] ">Peoples successsfully got this dream place</p>
      </div>
    </div>
  );
}
