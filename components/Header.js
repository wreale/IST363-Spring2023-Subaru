import NavOverlay from './NavOverlay'
import Button from './Button'
import styles from './header.module.css';
import { useState } from 'react';

const Header = ({children}) => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}>
        <Button 
        label='Menu'
        clickHandler={() => {
                setMenuVisible(true);
        }}
        />
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