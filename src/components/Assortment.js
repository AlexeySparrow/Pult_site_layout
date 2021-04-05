import React, {useState} from 'react'
import style from '../assets/scss/components/assortment.module.scss'
import {assortment} from '../store/assortment'

export const Assortment = ({setAboutProduct, setNumberProduct, setHeightAbout}) => {

    const [imgHover, setImgHover] = useState('../assets/img/logo_pult_1.png')

    let onHandlerClick = (idx) => {
        setAboutProduct(idx)
        setNumberProduct(0)
        setHeightAbout('flex')
    }

    return (
        <section className={style.container}>
            <div className={style.btnBox}>
                {
                    assortment.map((item, idx) =>
                        <a
                            href="#section"
                            key={idx}
                            onMouseEnter={() => setImgHover(item.titlePreview)}
                            onClick={() => { onHandlerClick(idx) }}
                        >
                            {item.title.replace('_', ' ').replace('_', ' ')}
                            <span/>
                        </a>
                    )
                }
            </div>
            <div className={style.hoverBox}>
                <span/>
                <img src={process.env.PUBLIC_URL + imgHover} alt="#"/>
            </div>
        </section>
    )
}