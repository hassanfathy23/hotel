import Copywrite from "./Copywrite";
import FooterHeader from "./Header";
import List from "./List";

export default function Footer() {
    return (
        <div className="px-40 pt-10 pb-4 flex flex-col justify-between bg-[#121212] ">
            <div className="py-8 flex flex-row justify-between border-b-2 border-b-white/10">
            <List header="Quick Link" items={['Home', 'Services', 'About Us', 'Contact']} />
            <FooterHeader />
            <List header="Useful" items={['Privacy Policy', 'Legal', 'FAQ', 'Blogs']} alignment="right" />
            </div>
            <Copywrite />
        </div>
    )
}