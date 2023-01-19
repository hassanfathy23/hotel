import Header from "./Header";
import ServicesList from "./ServicesList";
import ShortcutList from "./ShortcutList";

export default function Services() {
    return (
        <div className="mt-28 flex flex-col">
            <ShortcutList />
            <Header />
            <ServicesList />
        </div>
    )
}