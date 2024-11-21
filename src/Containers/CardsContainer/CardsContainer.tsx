import React from 'react'
import classes from './CardsContainer.module.scss'
import { ItemCard } from '../../Components/ItemCard/ItemCard'

import { CardProps } from '../../Components/ItemCard/ItemCard'

export const CardsContainer = () => {

    const cardsArray: CardProps[] = [{
        styleType: 'default',
        haveImage: false,
        categoryText: 'Категория 1',
        titleText: 'Управление ИТ-активами – скучная рутина или творческая задача?'
    }, {
        styleType: 'special',
        haveImage: false,
        categoryText: 'Категория 1',
        titleText: 'ITAM&SAMDay – самая настоящая удача!'
    }, {
        styleType: 'special',
        haveImage: true,
        categoryText: 'Очень длинная категория 2',
        titleText: 'Управление ИТ-активами – скучная рутина или творческая задача?'
    }, {
        styleType: 'slim',
        haveImage: false,
        categoryText: 'Категория 1',
        titleText: 'Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего... '
    }, {
        styleType: 'slim',
        haveImage: false,
        categoryText: 'Категория 1',
        titleText: 'ITAM&SAMDay – самая настоящая удача!'
    }]

    const pagginationArr = [1, 2, 3, 4, '...', 10]


    return (
        <section className={classes.mainContainer}>
            <div >
                <ItemCard categoryText='Категория 1' titleText='Управление ИТ-активами – скучная рутина или творческая задача?' />
            </div>
            <div className={classes['grid-container']}>

                {cardsArray.map((item, i) => <div className={classes['grid-item']}>
                    <ItemCard key={i} {...item} />
                </div>)
                }

            </div>

            <div className={classes.pagination}>
                <ul>
                    {pagginationArr.map((item) => {
                        return <li>
                            {item}
                        </li>
                    })}

                </ul>
                <div className={classes.nextContainer}>
                    Следующая
                    <span>
                    </span>
                </div>

            </div>
        </section>
    )
}



