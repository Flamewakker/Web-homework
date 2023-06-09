import React from "react";
import "./Home11.css"

function Home11() {
  return (
    <div className="main">
      <h1>Мой сайт</h1>
      <p>Я вам покажу кое что</p>

      <nav>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Ассортимент</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>

      <h2>Добро пожаловать в автосалон</h2>
      <p>
      В нашем автосалоне представлен широкий б/у автомобилей разных марок и моделей, а также престижных. Мы гарантируем надежность и безопасность каждого автомобиля, а также предоставляем высококачественный сервис и выгодные условия покупки и обслуживания. Наши эксперты всегда готовы помочь вам выбрать автомобиль и ответить на все ваши вопросы.
      </p>

      <h3>Новые статьи</h3>
      <ul>
        <li>
          <a href="#">Купи автомобиль сейчас!!!</a>
        </li>
        <li>
          <a href="#">
          У нас вы можете не только
купить автомобиль, но и сделать
диагностику его состояния.

          </a>
        </li>
        <li>
          <a href="#">Поездка на автомобиле по России</a>
        </li>
      </ul>

      <h3>Переходи на наш Ассортимент</h3>
      <ul>
        <li>
          <a href="#">
            Переход по ссылке "Лада приора"
          </a>
        </li>
        <li>
          <a href="#">
          Переход по ссылке "Хендай солярис"
          </a>
        </li>
        <li>
          <a href="#">
          Переход по ссылке "Тойота камри"
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home11;
