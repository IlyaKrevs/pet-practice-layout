import React, { FC } from 'react'
import classes from './ItemCard.module.scss';

export interface CardProps {
    styleType?: 'default' | 'special' | 'slim',
    haveImage?: boolean,
    categoryText: string,
    titleText: string,
}

export const ItemCard: FC<CardProps> = ({ styleType = 'default', haveImage, titleText, categoryText }) => {

    const resultStyles = [classes.main]

    if (styleType === 'special') {
        resultStyles.push(classes['main--specialStyle'])
        haveImage && resultStyles.push(classes['main--haveImage'])
    }

    return (
        <article className={resultStyles.join(' ')}>
            <div className={classes.main__category}>
                {categoryText}
            </div>

            <div className={classes.main__date}>
                13 дек 2020
            </div>
            <div className={classes.main__text}>

                <h3 className={classes.main__title}>
                    {titleText}
                </h3>
                {styleType === 'default' &&
                    <p className={classes.main__description}>
                        Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще.
                    </p>
                }
            </div>


        </article>
    )
}


