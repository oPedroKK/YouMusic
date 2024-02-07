import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"

import styles from "./Search.module.css"
import musics from "../../json/music-db.json"
import SearchMusicList from "../../components/SearchMusicList"

function Search() {
    return (
        <div>
            <Header />

            <Container>
                <section className={styles.searchbox}>
                    <SearchMusicList musics={musics}/>
                </section>
            </Container>

            <Footer />
        </div>
    )
        
}

export default Search;