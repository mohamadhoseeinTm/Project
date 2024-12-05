import React, { useRef, useState, useEffect } from 'react';
import './Slider.scss';
import Marquee from 'react-fast-marquee';

const Slider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const sliderListRef = useRef<HTMLDivElement | null>(null);
    const thumbnailRef = useRef<HTMLDivElement | null>(null);
    const [selectedImage, setSelectedImage] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [sliderItems, setSliderItems] = useState([
        {
            id: 1,
            src: "https://cpimg.tistatic.com/06331477/b/4/Plastic-Granules-Making-Machine.jpg",
            type: "FLOWER",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio."
        },
        {
            id: 2,
            src: "https://www.lookingplas.com/storage/images/ILSMjAyMy8xMS8wMy8wMDAz!!1437648ea39549b784c78c0ab953e37f.jpg",
            type: "NATURE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio."
        },
        {
            id: 3,
            src: "https://www.lookingplas.com/storage/images/ILSMjAyMy8wNy8yNi8wMDA0!!b189a42a140c44919ff8450330b79947.jpg",
            type: "PLANT",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio."
        },
        {
            id: 4,
            src: "https://www.lookingplas.com/storage/images/ILSMjAyMy8wNy8yMS8wMDA4!!79cd389fe030404fadacdef9ed861b0a.jpg",
            type: "NATURE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio."
        },
    ]);

    useEffect(() => {
        if (sliderItems.length > 0) {
            const updatedImages = sliderItems.map(item => item.src);
            setSelectedImage(updatedImages.map((src, index) => {
                return updatedImages[(index + 1) % updatedImages.length];
            }));
        }
    }, [sliderItems]);

    const moveSlider = (direction: 'next' | 'prev') => {
        const sliderItems = sliderListRef.current?.querySelectorAll('.item') ?? [];
        const slider = sliderRef.current;

        if (direction === 'next') {
            if (sliderItems.length > 0) {
                sliderListRef.current?.appendChild(sliderItems[0]);
                slider?.classList.add('next');
                setActiveIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
            }
        } else {
            if (sliderItems.length > 0) {
                sliderListRef.current?.prepend(sliderItems[sliderItems.length - 1]);
                slider?.classList.add('prev');
                setActiveIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
            }
        }

        setTimeout(() => {
            slider?.classList.remove('next');
            slider?.classList.remove('prev');
        }, 500);

        // Update the selected image with one-step forward in thumbnails
        const updatedItems = sliderListRef.current?.querySelectorAll('.item img') ?? [];
        setSelectedImage(Array.from(updatedItems).map((img, index) => {
            return updatedItems[(index + 1) % updatedItems.length].getAttribute('src') ?? '';
        }));
    };

    return (
        <div className="slider" ref={sliderRef}>
            <div className='Marquee'>
                <Marquee direction="right" speed={80}>
                    <div className='Marquee-Paragraph'>
                        <h1>NANJING HUNDRED HORSE PLASTIC MACHINE CO. LTD.</h1>
                        <h1>شرکت آریا گستر مهاجر نماینده نانجینگ در ایران</h1>
                    </div>
                </Marquee>
            </div>
            <div className="list" ref={sliderListRef}>
                {sliderItems.map((item, index) => (
                    <div key={item.id} className={`item`}>
                        <img src={item.src} alt={item.type} />
                        <div className={`content ${index === activeIndex ? 'active' : ''}`}>
                            <div className="title">{item.type}</div>
                            <div className="type">{item.type}</div>
                            <div className="description">{item.description}</div>
                            <div className="button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail" ref={thumbnailRef}>
                {selectedImage.map((src, index) => (
                    <div key={index} className="item">
                        <img src={src} alt={`Thumbnail`} />
                    </div>
                ))}
            </div>

            <div className="nextPrevArrows">
                <button className="prev" onClick={() => moveSlider('prev')}>{"<"}</button>
                <button className="next" onClick={() => moveSlider('next')}>{">"}</button>
            </div>
        </div>
    );
};

export default Slider;
