import Button from "./Button";
import Logo from "./Logo";
import NavList from "./NavList";

export default function Navbar() {
    return (
        <div className="w-full px-40 py-10 flex flex-row justify-between items-center bg-[#121212]">
            <Logo />
            <NavList />
            <Button />
        </div>
    )
}