
type AppProps = {
    content: string;
}


export default function ListItem({content}: AppProps) {
    return (
        <h4 className="text-[16px] text-white leading-[162.5%] cursor-pointer ">
            {content}
        </h4>
    )
}