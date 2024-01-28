import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {

    return (
        <header className={styles.header}>
            <Link to="/">
                <span>YouMusic</span>
            </Link>
            
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/listen">Ouvir</Link>

            </nav>
            
        </header>
    )


}

export default Header;