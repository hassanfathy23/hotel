import ListItem from "./ListItem";

export default function HeroList() {
    return (
        <div className="flex flex-col gap-4">
            <ListItem content="Book a hotel service" />
            <ListItem content="Book a hotel service" />
            <ListItem content="Book a hotel service" />
        </div>
    )
}