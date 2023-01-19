import { Icon } from '@iconify/react';
import Link from 'next/link';

type AppProps = {
    content: string
}

export default function ListItem({content}: AppProps) {
    return (
        <Link href="#" className="flex flex-row justify-between items-center border-b-2 border-b-white">
            <p className='text-[16px] text-white font-medium'>{content}</p>
            <Icon icon="material-symbols:chevron-right-rounded" color="white" />
        </Link>
    )
}