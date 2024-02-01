import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                
                <h1>Ops!</h1>
                <h1>Parece que essa pagína não foi encontrada!</h1>
            </section>
            <Footer/>
        </>
    );
}

export default PageNotFound;