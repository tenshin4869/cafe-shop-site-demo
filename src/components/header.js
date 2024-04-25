import Logo from "./logo";
import Nav from "./nav";
import styles from '../styles/header.module.css';
import Container from "@/components/container";
export default function Header() {
    return (

    <header>
        <p className={styles.sideBySideCenter}>授業で制作したサイトです</p>
        <Container large>
         <div className={styles.spaceBetween}>
                <Logo boxOn  />
                <Nav />
         </div>
        </Container>
        
        
    </header>
    )
}