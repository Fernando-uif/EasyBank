import React from "react";
import text from "../../sass/base/Text.module.scss";
import dolars from "../../assets/images/image-currency.jpg";
import card from "../../sass/layout/ChooseBank.module.scss";
import food from "../../assets/images/image-restaurant.jpg";
import airplane from "../../assets/images/image-plane.jpg";
import conffeti from "../../assets/images/image-confetti.jpg";

export const LatestArticles = () => {
  return (
    <>
      <h2 className={text.subtitle}>latest articles</h2>
      <section>
        <article className={card.card}>
          <div>
            <img className={card["card__img"]} src={dolars} />
          </div>

          <div className={card["card__detail"]}>
            <blockquote className={card["card__block"]}>
              By Claire Robinson
            </blockquote>
            <h3>Receive money in any currency width no fees</h3>
            <p className={text['detail__articles']}>
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </article>
        <article className={card.card}>
          <div>
            <img className={card["card__img"]} src={food} />
          </div>

          <div className={card["card__detail"]}>
            <blockquote className={card["card__block"]}></blockquote>
            <h3>Treat yourself without worrying about money</h3>
            <p className={text['detail__articles']}>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </article>
        <article className={card.card}>
          <div>
            <img className={card["card__img"]} src={airplane} />
          </div>

          <div className={card["card__detail"]}>
            <blockquote className={card["card__block"]}>
              By Wilson Hutton
            </blockquote>
            <h3>Take your Easybank card wherever you go</h3>
            <p className={text['detail__articles']}>
              We want you to enjoy your travels. This is why we don't charge any
              fees on purchases while you're abroad. We'll even show you …
            </p>
          </div>
        </article>
        <article className={card.card}>
          <div>
            <img className={card["card__img"]} src={conffeti} />
          </div>

          <div className={card["card__detail"]}>
            <blockquote className={card["card__block"]}>
              By Claire Robinson
            </blockquote>
            <h3>Our invite-only Beta accounts are now live!</h3>
            <p className={text['detail__articles']}>
              After a lot of hard work by the whole team, we're excited to
              launch our beta. It's easy to request an invite through the site
              ...
            </p>
          </div>
        </article>
      </section>
    </>
  );
};
