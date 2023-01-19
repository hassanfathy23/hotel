import Link from "next/link"

type AppProps = {
    content: string
}

export default function NavItem({content}: AppProps) {
    return (
        <Link href="#" className="py-1 px-4 text-white text-[16px] font-medium">{content}</Link>
    )
}