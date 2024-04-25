import Link from "next/link";
import styles from '../styles/logo.module.css';
export default function Logo({boxOn = false}) {
    return (
        <div className={boxOn ? styles.box : styles.basic}>
            <Link href="/">CafeLuchana</Link>
        </div>
        
    )
}