import styles from '../styles/social.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faInstagram,
    faFacebookF,
} from '@fortawesome/free-brands-svg-icons'

export default function Social() {
    return (
        <ul className={styles.list}>
            <li>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="sr-only">Twitter</span>                    
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/cafe_gallery_luchana/">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className="sr-only">Twitter</span>
                </a>
            </li>

            <li>
                <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className="sr-only">Facebook</span>                    
                </a>
            </li>
        </ul>
    )
}