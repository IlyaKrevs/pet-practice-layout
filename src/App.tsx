import React from 'react';
import classes from './App.module.scss';
import { ItemCard } from './Components/ItemCard/ItemCard';
import { MainLogo } from './Components/MainLogo/MainLogo';
import { Header } from './Components/Header/Header';
import { CardsContainer } from './Containers/CardsContainer/CardsContainer';
import { NewsContainer } from './Containers/NewsContainer/NewsContainer';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <div className={classes.imageContainer}></div>

      <main className={classes.mainContainer}>
        <CardsContainer />
        <NewsContainer />
      </main>

      <footer className={classes['footer-main']}>
        <MainLogo />
        <nav className={classes['footer-main__nav']}>
          <ul>
            <li>О нас</li>
            <li>Галерея</li>
            <li>Новости</li>
            <li>Контакты</li>
          </ul>

        </nav>
        <span>ООО “Организация” 2020. Все права защищены</span>
      </footer>
    </div>
  );
}

export default App;


