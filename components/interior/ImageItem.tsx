import Image from "next/image";

type AppProps = {
   image: string;
   overflow?: boolean;
}

export default function ImageItem({image, overflow}: AppProps) {
 return (
    <Image src={image} width={57} height={57} alt="image" className={`${overflow ? "-ml-3": ""} `} />
 )
}