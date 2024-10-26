import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./CarCarousel.module.css";

import image1 from "../../../assets/image1.jfif";
import image2 from "../../../assets/image2.jfif";
import image3 from "../../../assets/image3.jfif";

const CarCarousel = () => (
  <div className={styles.carouselContainer}>
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <img src={image1} alt="Image 1" className={styles.carouselImage} />
        <p className="legend">Caption 1</p>
      </div>
      <div>
        <img src={image2} alt="Image 2" className={styles.carouselImage} />
        <p className="legend">Caption 2</p>
      </div>
      <div>
        <img src={image3} alt="Image 3" className={styles.carouselImage} />
        <p className="legend">Caption 3</p>
      </div>
    </Carousel>
  </div>
);

export default CarCarousel;
