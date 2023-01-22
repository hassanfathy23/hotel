import { Icon } from '@iconify/react';

type AppProps = {
    icon: string
}

export default function IconItem({icon}: AppProps) {
    return (
        <Icon icon={icon} color="white" width="30" height="30" />
    )
}