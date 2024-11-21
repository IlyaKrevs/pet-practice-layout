import React from 'react'
import classes from './Header.module.scss'
import { MainLogo } from '../MainLogo/MainLogo'
import phoneIcon from '../../assets/phone.svg'

export const Header = () => {

    const navArr = ['Главная', 'О нас', 'Контакты', 'Поиск']

    return (
        <header className={classes.main}>
            <MainLogo />

            <nav className={classes.navBar}>
                <ul>
                    {navArr.map(item => {
                        return <li>
                            {item}
                        </li>
                    })}
                    <li className={classes.specialItem}>
                        <img src={phoneIcon} alt="phone" />
                        +7 (987) 887-87
                    </li>
                </ul>
            </nav>
        </header>
    )
}

