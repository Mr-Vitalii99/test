import React from 'react';
import './About.scss';
import {ReactComponent as IconArrowDown} from '../../../../assets/icons/icon-arrow-down.svg'
import { useState } from 'react';

export const About = () => {

  const [active, setActive] = useState(false)

    return (
      <div className={`about ${active ? "active" : ""}`}>
        <h3 className="about__title">Замовити суші в Харкові</h3>
        <p className="about__text">
          Ресторан “Vitoshi” пропонуємо своїм клієнтам найсмачніші суші з
          доставкою додому, приготовані за класичними та адаптованими до
          європейської аудиторії рецептам, а також власним напрацюванням наших
          кухарів. Ми цінуємо час наших клієнтів, тому ви можете замовити суші у
          Харкові з доставкою додому чи в офіс.
        </p>
        <p className="about__text">У нашому меню понад 20 видів суші:</p>
        <ul className="about__list">
          <li className="about__list-item">
            Класичні із сирим лососем, тунцем, окунем.
          </li>
          <li className="about__list-item">
            Екзотичні з тигровою креветкою, морським гребінцем.
          </li>
          <li className="about__list-iyem">
            Пікантні з копченим лососем, вуграм.
          </li>
        </ul>
        <p className="about__text">
          У меню також представлені гункани: з начинкою з червоної ікри та
          тобіко, а також фелікси, де японський майонез поєднується з рибою,
          морепродуктів, вугрів. Любителі гострих страв можуть купити суші із
          соусом спайсі. Популярні начинки - копчена курка, сніжний краб,
          креветки, гребінці, тунець, лосось і окунь.
        </p>
        <button
          type="button"
          className="about__btn"
          onClick={() => setActive(!active)}
        >
          <span className="about__btn-text">Детальніше</span>
          <IconArrowDown />
        </button>
      </div>
    );
};


