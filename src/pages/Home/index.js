import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";

import Category, {artistsGenre, filterArtist} from "../../components/Category";
import MusicCard from "../../components/MusicCard";

import Artists from "../../components/Artists";
import Carousel from "../../components/Carousel";

function Home() {
  return (
    <div>
      <Header />
      <Banner image="01" />

      <Container>
          <Artists />
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
