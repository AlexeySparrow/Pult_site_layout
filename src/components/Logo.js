import React from 'react'
import style from '../assets/scss/components/logo.module.scss'

export const Logo = () => {
    return (
        <section className={style.header}>
            <span/>
            <img src={process.env.PUBLIC_URL + '../assets/img/logo_pult.svg'} alt="logo"/>
            <span/>
        </section>
    )
}