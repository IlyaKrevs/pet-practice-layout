import React from 'react'
import classes from './SubscribeForm.module.scss'


export const SubscribeForm = () => {
    return (
        <form className={classes.main}>
            <h4 className={classes.main__title}>
                Подписка на рассылку
            </h4>
            <div className={classes.wrapper}>

                <input
                    className={classes.inputContainer}
                    type="text" placeholder='Email@gmail.com' />

                <button
                    className={classes.btnContainer}>
                    Подписаться
                </button>
            </div>
        </form>

    )
}
