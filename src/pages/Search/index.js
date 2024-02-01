import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"

import styles from "./Search.module.css"
import MusicList from "../../components/MusicList"
import musics from "../../json/music-db.json"

function Search() {
    return (
        <div>
            <Header />

            <Container>
                <section className={styles.searchbox}>
                    <MusicList musics={musics}/>
                </section>
            </Container>

            <Footer />
        </div>
    )
        
}

export default Search;