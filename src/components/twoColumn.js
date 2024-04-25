import styles from '../styles/two-column.module.css';
export  default function TwoColumn({children}) {
    return (
        <div className={styles.stack}>
            {children}
        </div>
    )
}