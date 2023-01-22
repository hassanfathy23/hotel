import ImageItem from "./ImageItem";

export default function ImagesList() {
    return (
        <div className="flex flex-row ">
            <ImageItem image="/images/Ellipse 21.png" />
            <ImageItem image="/images/Ellipse 22.png" overflow />
            <ImageItem image="/images/Ellipse 23.png" overflow />
            <ImageItem image="/images/Ellipse 24.png" overflow />
            <ImageItem image="/images/Ellipse 25.png" overflow />
        </div>
    )
}