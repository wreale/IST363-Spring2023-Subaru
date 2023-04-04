import styles from './container.module.scss';

const Container = ({children}) => {
    return <div className={styles.Container}>
        {children}
    </div>
}
export default Container;