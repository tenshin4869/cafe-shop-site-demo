import styles from '../styles/two-column.module.css';
export  default function TwoColumnMain({children}) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}