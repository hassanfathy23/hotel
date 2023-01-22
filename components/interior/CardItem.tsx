import { Icon } from "@iconify/react";

type AppProps = {
  icon: string;
  header: string;
  description: string;
  shadow?: boolean;
};

export default function CardItem({ icon, header, description, shadow }: AppProps) {
  return (
    <div className={`w-[339px] px-6 py-8 flex flex-col gap-4 bg-white ${shadow ? "shadow-2xl shadow-black/10": ""} `}>
      <Icon icon={icon} color="#ff6b00" width="56" height="56" />
      <h2 className="text-[22px] text-[#292929] font-semibold leading-[122%] ">
        {header}
      </h2>
      <p className="text-[#292929]/30 text-[14px] font-medium leading-[162.5%] ">
        {description}
      </p>
    </div>
  );
}
