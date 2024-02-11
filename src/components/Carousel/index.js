import Slider from "react-slick";
import "./carousel.css"

function Carousel({ children }) {

    const settings = {
        dots: false,
        adaptiveHeight: true,
        VariableWidth: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return (
        <div>
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel