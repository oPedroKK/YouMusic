import styles from "./Banner.module.css"

function Banner({ image }) {
    return (
        <div 
            className={styles.banner}
            style={{ backgroundImage: `url('/images/background-${image}.jpg')` }}
        >
            <h2>Explore o mundo das suas músicas como nunca!</h2>
        </div>
    );
}

export default Banner;