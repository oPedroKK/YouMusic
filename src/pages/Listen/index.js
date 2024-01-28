import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Listen.module.css"

import Category, {artistsNames, filterArtist} from "../../components/Category";
import Musics from "../../components/Musics";

function Listen() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.listen}>

                {
                artistsNames.map((artist_name, index) => 
                    <Category name={artist_name}>
                        {
                        filterArtist(index).map((musica) => {
                            return <Musics id={musica.id} title={musica.title} key={musica.title}/>
                        })
                        }
                    </Category>
                    )
                }

                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Listen; 