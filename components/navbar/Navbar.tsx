import Button from "./Button";
import Logo from "./Logo";
import NavList from "./NavList";

export default function Navbar() {
    return (
        <div className="w-full px-3 lg:px-40 py-10 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center bg-[#121212]">
            <Logo />
            <NavList />
            <Button />
        </div>
    )
}