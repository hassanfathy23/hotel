import { Icon } from '@iconify/react';

export default function Logo() {
    return (
        <div className='text-[18px] text-white font-bold'>
            <div className='flex flex-row gap-2 items-center'>
            <h1>The</h1>
            <Icon icon="game-icons:ice-pop" color="white" rotate={1} inline={true} />
            </div>
            <h1 className=''>Breakdance</h1>
        </div>
    )
}