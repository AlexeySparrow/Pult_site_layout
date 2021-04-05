import React from 'react'
import style from '../assets/scss/components/footer.module.scss'

export const Footer = () => {
    return (
        <section className={style.container}>
            <div className={style.tel}>
                <a href="tel:+78005555152">8(800)555-51-52</a>
                <span>ЗВОНОК ПО РОССИИ БЕСПЛАТНЫЙ</span>
            </div>
            <div className={style.links}>
                <ul>
                    <li>акустика</li>
                    <li>hi-fi</li>
                    <li>винил</li>
                    <li>наушники</li>
                    <li>телевизоры</li>
                    <li>проекторы</li>
                </ul>
                <ul>
                    <li>распродажа</li>
                    <li>outlet</li>
                    <li>акции</li>
                    <li>бонусы и скидки</li>
                    <li>рассрочка</li>
                </ul>
                <ul>
                    <li>о компании</li>
                    <li>контакты</li>
                    <li>салоны</li>
                    <li>новости</li>
                </ul>
            </div>
            <div className={style.age}>
                <p>2021 © / PULT.RU / ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
            </div>
        </section>
    )
}