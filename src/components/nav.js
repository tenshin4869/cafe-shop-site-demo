import Link from "next/link";
import styles from '../styles/nav.module.css';
import { useState } from "react";

export default function Nav() {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }

    const closeNav = () => {
        //setNavOpenでnavIsOpenの値をfalseに更新
        setNavIsOpen(false)
    }

    return (

        
        <nav className={navIsOpen ? styles.open : styles.close}>
            
            
                <button className={styles.btn} onClick={toggleNav}>
                    <span className={styles.bar}></span>
                    <span className="sr-only">MENU</span>                   
                </button>

            

            <ul className={styles.list}>
                <li>
                <Link href="/" onClick={closeNav}>Home</Link>
                </li>
                <li>
                <Link href="/about" onClick={closeNav}>About</Link>
                </li>
                <li>
                <Link href="/menu" onClick={closeNav}>Menu</Link>
                </li>
            </ul>
        </nav>
       
    )
}