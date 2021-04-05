import React, {useState} from 'react'
import style from './assets/scss/components/app.module.scss'
import {ParticleBackground} from "./components/ParticleBackground";
import {AboutTheProduct} from "./components/AboutTheProduct";
import {Logo} from "./components/Logo";
import {Footer} from "./components/Footer";
import {Slider} from "./components/Slider";
import {Assortment} from "./components/Assortment";

export const App = () => {

    const [aboutProduct, setAboutProduct] = useState(0)
    const [numberProduct, setNumberProduct] = useState(0)
    const [heightAbout, setHeightAbout] = useState('none')

    return (
        <div className={style.wrapper}>
            <ParticleBackground/>
            <Logo />
            <div className={style.container}>
                <Slider />
                <Assortment
                    setAboutProduct={setAboutProduct}
                    setNumberProduct={setNumberProduct}
                    setHeightAbout={setHeightAbout}
                />
                <AboutTheProduct
                    aboutProduct={aboutProduct}
                    numberProduct={numberProduct}
                    setNumberProduct={setNumberProduct}
                    heightAbout={heightAbout}
                />
            </div>
            <Logo />
            <div className={style.container}>
                <Footer />
            </div>
        </div>
    );
}
