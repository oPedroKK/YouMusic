import styles from "./MusicList.module.css"
import MusicCard from "../../components/MusicCard"

function MusicList({ musics, emptyHeading}) {

    const countMusics = musics.length;
    let heading = emptyHeading;
    if(countMusics > 0){
        const noun = countMusics > 1 ? "músicas" : "música"
        heading = `${countMusics} ${noun}`
    }

    return (
        <>
            <h2>{heading}</h2>
            <section className={styles.musics}>
                { musics.map((music) => <MusicCard id={music.id} title={music.title} key={music.id}/>)}
            </section>
        </>
    )
}

export default MusicList;