import Image from 'next/Image'

const Icon = ({icon}) => {
    return <Image
        src={`/icons/${icon}.svg`}
        alt={`${icon} icon`}
        width={20}
        height={20}
    />
}
export default Icon;