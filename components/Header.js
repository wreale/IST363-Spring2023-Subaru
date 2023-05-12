import NavOverlay from './NavOverlay';
import Button from './Button';
import ButtonUI from './ButtonUI';
import NavDesktop from './NavDesktop';
import Logo from './Logo';
import Link from 'next/link'
import styles from './header.module.scss';
import { useState } from 'react';

const Header = ({children}) => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}>
        <Link href="/">
            <Logo />
        </Link>
        
        <ButtonUI 
            icon="menu"
            label='Menu'
            clickHandler={() => {
                    setMenuVisible(true);
            }}
        /> 
        <NavDesktop />
        {isMenuVisible && 
            <NavOverlay 
            closeHandler={() => {
                setMenuVisible(false);
            }}
        />
        }
    </header>
}
export default Header