import CardsList from "./CardsList";
import InteriorDescription from "./Description";

export default function Interior() {
    return (
        <div className="px-4 lg:px-40 py-20 flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
            <InteriorDescription />
            <CardsList />
        </div>
    )
}