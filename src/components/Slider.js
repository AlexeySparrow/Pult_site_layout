import React, {useState} from 'react'
import style from '../assets/scss/components/slider.module.scss'
import {productCarousel, saleCarousel} from '../store/carousels'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/open-animation.css'

export const Slider = () => {

    const [slider, setSlider] = useState(productCarousel)

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <section className={style.container}>
            <div className={style.sliderBox}>
                <a onClick={() => setSlider(productCarousel)}>
                    <span/>
                    новинки
                </a>
                <a onClick={() => setSlider(saleCarousel)}>
                    <span/>
                    акции
                </a>
                <AutoplaySlider
                    organicArrows={false}
                    play={true}
                    cancelOnInteraction={false}
                    interval={3000}
                    animation="openAnimation"
                >
                    {
                        slider.map((item, idx) =>
                            <div key={idx} className={style.slide}>
                                <h1>{item.title}</h1>
                                <img src={process.env.PUBLIC_URL + item.url} alt="#"/>
                                <div>
                                    <h2>{item.subtitle}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    }
                </AutoplaySlider>
            </div>
        </section>
    )
}
