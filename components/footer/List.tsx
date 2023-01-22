import ListItem from "./ListItem";

type AppProps = {
    header: string;
    items: string[];
    alignment?: string;
}


export default function List({header, items, alignment}: AppProps) {
    return (
        <div className={`flex flex-col gap-4 ${alignment === 'right'? 'text-right': 'text-left'} `}>
            <h3 className="text-white text-[22px] font-semibold leading-[162.5%] ">{header}</h3>
            <div className="flex flex-col gap-5 ">
                {
                    items.map((item, index) => (
                        <ListItem key={index} content={item} />
                    ))
                }
            </div>
        </div>
    )
}