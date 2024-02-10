import styles from "./SearchList.module.css"
import MusicList from "../MusicList"
import { useState } from "react";




function SearchMusicList({ musics }){
    
    const [searchText, setSearchText] = useState('')
    const foundMusic = filterMusic(musics, searchText)
    

    function filterMusic() {
        return musics.filter((music) => music.artist.includes(searchText) || music.title.includes(searchText))
    }

    return (
        <section className={styles.searchlist}>
            <input
                type="search"
                placeholder="Pesquise sua música!"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />

            <MusicList musics={foundMusic} emptyHeading={`Nenhum resultado encontrado para "${searchText}"`}/>

        </section>
    );
}

export default SearchMusicList;