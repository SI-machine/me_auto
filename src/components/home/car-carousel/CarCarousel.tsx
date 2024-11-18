import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./CarCarousel.module.css";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { setCurrentSlide } from "../../../store/features/carouselSlice";

import image1 from "../../../assets/image1.jfif";
import image2 from "../../../assets/image2.jfif";
import image3 from "../../../assets/image3.jfif";

const CarCarousel = () => {
  const dispatch = useAppDispatch();
  const currentSlide = useAppSelector((state) => state.carousel.currentSlide);
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        selectedItem={currentSlide}
        onChange={(index) => dispatch(setCurrentSlide(index))}
      >
        <div>
          <img src={image1} alt="Image 1" className={styles.carouselImage} />
          <p className="legend">Сервис</p>
        </div>
        <div>
          <img src={image2} alt="Image 2" className={styles.carouselImage} />
          <p className="legend">База данных</p>
        </div>
        <div>
          <img src={image3} alt="Image 3" className={styles.carouselImage} />
          <p className="legend">Форум</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarCarousel;
