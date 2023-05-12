import styles from './navsocialmedia.module.scss'
import Image from 'next/image'

const accounts = [
    {
        name: "Facebook",
        slug: "facebook",
        url: "https://facebook.com/subaruofamerica"
    },
    {
        name: "Twitter",
        slug: "twitter",
        url: "https://twitter.com/subaru_usa"
    },
    {
        name: "Instagram",
        slug: "instagram",
        url: "https://instagram.com/subaru_usa"
    },
    {
        name: "Youtube",
        slug: "youtube",
        url: "https://youtube.com/Subaru"
    },
]

const NavSocialMedia = () => {
    return <nav>
        <ul className={styles.navsocialmedia}>
            {accounts.map((account, index) => {
                const {name, slug, url} = account
                return <li key={`socialMediaLink${index}`}>
                    <a href={url} target="_blank">
                        <Image
                            src={`/icons/${slug}.svg`}
                            alt={`${name} icon`}
                            width={32}
                            height={32}
                        />
                    </a>
                </li>
            })}
        </ul>
    </nav>
}
export default NavSocialMedia