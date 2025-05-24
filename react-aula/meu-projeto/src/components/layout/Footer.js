import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';
import { FaHandScissors } from "react-icons/fa6";

function Footer() {
    return ( 
    <footer>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook/>
            </li>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <FaTwitter/>
            </li>
        </ul>
        <p>Nosso rodapé</p>
        <FaHandScissors />
    </footer>
    )
}

export default Footer;