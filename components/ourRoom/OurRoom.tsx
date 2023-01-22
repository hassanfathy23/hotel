import Gallery from "./Gallery";
import OurRoomHeader from "./Header";

export default function OurRoom() {
    return (
        <div className="px-40 mt-32 flex flex-col gap-14">
            <OurRoomHeader />
            <Gallery />
        </div>
    )
}