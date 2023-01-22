import CardsList from "./CardsList";
import InteriorDescription from "./Description";

export default function Interior() {
    return (
        <div className="px-40 py-20 flex flex-row justify-between">
            <InteriorDescription />
            <CardsList />
        </div>
    )
}