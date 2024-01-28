import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";


import Artists from "../../components/Artists";
import artistas from "../../json/profile-db.json";

function Home() {
  return (
    <div>
      <Header />
      <Banner image="01" />
      <Container>

          <Artists>
            {
              artistas.map((artista) => {
                return <Card photo={artista.photo} format={artista.format} name={artista.name} key={artista.name}/>
              })
            }
          </Artists>

      </Container>
      <Footer />
    </div>
  );
}

export default Home;
