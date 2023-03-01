import React from "react";
import text from "../../sass/base/Text.module.scss";
import dolars from "../../assets/images/image-currency.jpg";
import card from '../../sass/layout/ChooseBank.module.scss';


export const LatestArticles = () => {
  return (
    <>
      <h2 className={text.subtitle}>latest articles</h2>
      <section>
        <article className={card.card}>
          <div>
            <img className={card['card__img']} src={dolars} />
          </div>

          <div className={card['card__detail']}>
            <blockquote className={card['card__block']}>By Claire Robinson</blockquote>
            <h3>Receive money in any currency width no fees</h3>
            <p>
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </article>
      </section>
    </>
  );
};
