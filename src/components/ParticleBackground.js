import React from 'react'
import Particles from "react-particles-js"
import style from '../assets/scss/components/particleBackground.module.scss'

export const ParticleBackground = () => {
    return (
        <section className={style.background}>
            <Particles
                params={{
                    "width": "100vh",
                    "particles": {
                        "number": {
                            "value": 70
                        },
                        "size": {
                            "value": 3
                        },
                        "line_linked": {
                            "color": "rgb(143, 201, 228)"
                        },
                        "color": "rgb(143, 201, 228)"
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onClick": {
                                "enable": true,
                                "mode": "push"
                            }
                        }
                    }
                }}
            />
        </section>

    )
}