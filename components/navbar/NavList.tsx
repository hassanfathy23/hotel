import NavItem from "./NavItem";

export default function NavList() {
    return (
        <div className="flex flex-row gap-6 justify-end items-center">
            <NavItem content="Home" />
            <NavItem content="Services" />
            <NavItem content="About Us" />
            <NavItem content="Room" />
            <NavItem content="Contact" />
        </div>
    )
}