import styles from '../styles/two-column.module.css';
export  default function TwoColumnSideber({children}) {
    return (
        <div className={styles.sideber}>
            {children}
        </div>
    )
}