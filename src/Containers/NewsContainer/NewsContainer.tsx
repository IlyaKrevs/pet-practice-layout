import React from 'react'
import classes from './NewsContainer.module.scss'
import { SubscribeForm } from '../../Components/SubscribeForm/SubscribeForm'

export const NewsContainer = () => {

    const newsArray = ['ITAM&SAMDay – самая настоящая удача!', 'Секреты лицензирования. Всё, что вы хотели знать про Microsoft, SAP и Oracle, но не знали, у кого спросить ...', 'Менеджмент XXI века. Надо ли готовиться к изменениям или мы давно уже должны были измениться?']

    return (
        <section className={classes.main}>

            <div className={classes.main__title}>
                Популярные новости
            </div>

            <ul className={classes.main__newsList}>
                {newsArray.map((item, i) => {
                    return <li key={i}>
                        {item}
                        <span>13 дек 2020</span>
                    </li>
                })}
            </ul>
            <SubscribeForm />
        </section>
    )
}

