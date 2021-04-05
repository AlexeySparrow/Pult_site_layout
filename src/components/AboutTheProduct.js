import React from 'react'
import style from '../assets/scss/components/aboutTheProduct.module.scss'
import {assortment} from '../store/assortment'

export const AboutTheProduct = ({aboutProduct, numberProduct, setNumberProduct, heightAbout}) => {

    const about = assortment[aboutProduct].options[numberProduct]

    return (
        <section className={style.container} id='section' style={{display: heightAbout}}>
            <div className={style.about}>
                <div>
                    <img src={process.env.PUBLIC_URL + about.preview}
                         alt={about.title}/>
                </div>
                <div>
                    <h1>{about.title}</h1>
                    <p>{about.text}</p>
                    <div className={style.buy}>
                        <button>
                            <span/>
                            купить
                        </button>
                        <div>
                            <p>{about.price} ₽</p>
                            <p>{about.sale} ₽</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.choice}>
                {
                    assortment[aboutProduct].options.map((item, idx) =>
                        <div
                            key={idx}
                            onClick={() => setNumberProduct(idx)}
                        >
                            <span/>
                            <img
                                src={process.env.PUBLIC_URL + item.preview}
                                alt={item.title}
                            />
                        </div>
                    )
                }
            </div>
        </section>
    )
}