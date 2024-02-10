import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";

import Category, {artistsGenre, filterArtist} from "../../components/Category";
import MusicCard from "../../components/MusicCard";

import Artists from "../../components/Artists";
import Carousel from "../../components/Carousel";

import artistsDB from "../../json/profile-db.json"
import ArtistCard from "../../components/ArtistCard";

function Home() {
  return (
    <div>
      <Header />
      <Banner image="01" />

      <Container>
          <Artists>
            
          {
              artistsDB.map((artista) => {
                return <ArtistCard photo={artista.photo} format={artista.format} name={artista.name} key={artista.name}/>
              })
          }
            
          </ Artists>
      </Container>

      <Container>
        <section> 
                {
                  artistsGenre.map((artist_genre, index) =>                  
                  <Category name={artist_genre}>
                        <Carousel>
                            {
                            filterArtist(index).map((musica) => {
                                return <MusicCard id={musica.id} title={musica.title} key={musica.title}/>
                            })
                            }
                          </Carousel>
                      </Category>
                    )
                }

        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
