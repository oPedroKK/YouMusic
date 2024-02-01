import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import ArtistCard from "../../components/ArtistCard";

import Category, {artistsNames, filterArtist} from "../../components/Category";
import MusicCard from "../../components/MusicCard";

import Artists from "../../components/Artists";
import artistsDB from "../../json/profile-db.json";

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
          </Artists>
      </Container>

      <Container>
        <section> 
                {
                  artistsNames.map((artist_name, index) =>                  
                      <Category name={artist_name}>
                          {
                          filterArtist(index).map((musica) => {
                              return <MusicCard id={musica.id} title={musica.title} key={musica.title}/>
                          })
                          }
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
