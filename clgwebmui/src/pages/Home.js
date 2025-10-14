import "../App.css";
import DepartmentCards from "../components/DepartmentCard";
import BackgroundSection from "../components/BackgroundImage";
import ImageSlider from "../components/ImageSlider";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

export default function Home() {
  const images = [image1, image2, image3];
    return (
      <>
        <BackgroundSection/>
        <DepartmentCards/>
        <ImageSlider images={images}/>
      </>
    );
}
