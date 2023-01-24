import { Icon } from '@iconify/react';

type AppProps = {
    content: string;
    icon: string
}


export default function ShortcutItem({content, icon}: AppProps) {
    return (
        <div className="w-[40%] md:w-[20%] px-3 md:px-0 flex flex-row gap-6 items-center">
            <Icon icon={icon} color="#ff6b00" width="48" height="48" />
            <p className='w-[40%] text-[#565656] text-[16px] font-medium leading-[131%]'>{content}</p>
        </div>
    )
}