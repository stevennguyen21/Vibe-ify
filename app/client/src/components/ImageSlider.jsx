import React, { useState } from 'react';
import './css/ImageSlider.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {
                slides.map((slide, index) => {
                    return (
                        <a href={slide.preview} className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <div>
                                    {/* <img className="sliderImage" src={slide.imageM} alt='album' /> */}
                                    <iframe src={slide.player} width="250" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                    <p className="slider-artist">{slide.artist}</p>
                                    <p className="slider-song">{slide.name}</p>
                                    <p className="slider-value">{slide.value}</p>
                                </div>
                            )}
                        </a>
                    )
                })
            }
        </section>
    )
};

export default ImageSlider;