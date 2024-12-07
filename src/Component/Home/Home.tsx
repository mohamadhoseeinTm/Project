import App from "./Description/Discription";
import ImageSlider from "./ImageSlider/ImageSlider";
import Para from "./ParagraphText/Para";
import Slider from "./Slider/Slider";

export default function Home() {
  return (
    <div>
      <div className='Slider'>
        <Slider/>
      </div>
      <div className="text">
        <Para/>
      </div>
      <div className="ImageSlider" style={{paddingTop:'30px'}}>
        <ImageSlider/>
      </div>
      <div className="Description">
        <App/>
      </div>
    </div>
  )
}
