import React from 'react';
import Marquee from 'react-fast-marquee';
import './ImageSlider.scss';
import image1 from '../../../assets/Machine1.webp';
import image2 from '../../../assets/Machine.8webp.webp';
import image3 from '../../../assets/Machine3.webp';
import image4 from '../../../assets/Making4.webp';
import image5 from '../../../assets/Machine5.webp';
import image6 from '../../../assets/Machine6.webp';
import image7 from '../../../assets/Machine7.webp';
import image9 from '../../../assets/Machine9.webp';
import image10 from '../../../assets/Machine10.webp';
import image11 from '../../../assets/Machine11.webp';
import image12 from '../../../assets/Machine12.webp';
import image13 from '../../../assets/Machine13.webp';
import image14 from '../../../assets/Machine14.webp';
import image15 from '../../../assets/Machine15.webp';
import image16 from '../../../assets/Machine16.webp';
import image17 from '../../../assets/Machine18.webp';
import image18 from '../../../assets/Machine19.webp';
import image19 from '../../../assets/Machine.8webp.webp';
import image20 from '../../../assets/Plastic-Filler-Masterbatch-Making-Line.webp';
import { NavLink } from 'react-router-dom';

const images = [
    { id: 1, title: "Water Strand Cutting Line", image: image1 },
    { id: 2, title: "Plastic Granules Making Machine", image: image2 },
    { id: 3, title: "Industrial Twin Screw Extruder Machine", image: image3 },
    { id: 4, title: "Plastic Pelletizer Machine", image: image4 },
    { id: 5, title: "Plastic Flakes Recycling Machine", image: image5 },
    { id: 6, title: "Plastic Filler Masterbatch Making Line", image: image6 },
    { id: 7, title: "Plastic Processing Machine", image: image7 },
    { id: 8, title: "Automatic Plastic Compounding Machine", image: image9 },
    { id: 9, title: "Water Ring Cutting Line", image: image10 },
    { id: 10, title: "Industrial Plastic Compounding Machine", image: image11 },
    { id: 11, title: "Plastic Cutter Machine", image: image12 },
    { id: 12, title: "Fully Automatic Plastic Granules Making Machine", image: image13 },
    { id: 13, title: "Industrial Plastic Granules Making Machine", image: image14 },
    { id: 14, title: "Twin Screw Plastic Compounding Machine", image: image15 },
    { id: 15, title: "Plastic Granulator Machine", image: image16 },
    { id: 16, title: "Water Strand Cutting Line", image: image17 },
    { id: 17, title: "Plastic Granules Making Machine", image: image18 },
    { id: 18, title: "Industrial Twin Screw Extruder Machine", image: image19 },
    { id: 19, title: "Plastic Pelletizer Machine", image: image20 }
];

const ImageSlider = () => {
    const handleClick = (id: number, title: string) => {
        console.log(`Image ID: ${id}, Title: ${title} clicked`);
    };

    return (
        <div className='boxImage'>
            <Marquee direction='right' gradient={false} pauseOnHover={true} speed={50} className="static-marquee">
                {images.map((item) => {
                    return (
                        <NavLink key={item.id} to={`ProductsMachine/${item.id}`} onClick={() => handleClick(item.id, item.title)}>
                            <div className='card'>
                                <div className="figere">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="paragraph">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
            </Marquee>
        </div>
    );
};

export default ImageSlider;
