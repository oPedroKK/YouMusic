import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import musicDB from "../../json/music-db.json";
import PageNotFound from "../PageNotFound";


import styles from "./Listen.module.css";
import { useParams } from "react-router-dom";


function Listen() {
    const params = useParams()
    const musicID = musicDB.find((musicID) => {
        return musicID.id === params.id
    })
    if(!musicID){
        return <PageNotFound />
    }

    return (
        <>
            <Header />
                <Container>
                    <section className={styles.listen}>
                        <iframe 
                            width="1000" height="640" 
                            src={`https://www.youtube.com/embed/${musicID.id}`}
                            title="YouTube video player" 
                            frameborder="0" ></iframe>
                    </section>
                </Container>
            <Footer />
        </>
    );
}

export default Listen; 