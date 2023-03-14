import text from "../../sass/base/Text.module.scss";
import onlineBanking from "../../assets/images/icon-online.svg";
import budgeting from "../../assets/images/icon-budgeting.svg";
import onboarding from "../../assets/images/icon-onboarding.svg";
import api from "../../assets/images/icon-api.svg";
import easyBank from "../../sass/layout/ChooseBank.module.scss";

export const ChooseBank = () => {
  return (
    <section className={easyBank['card__container']}>
      <section className={`${easyBank['card__title']}`}>
        <h2 className={`${text.subtitle} ${easyBank['card__subtitleCard']}`}>why choose Easybank?</h2>

        <p className={`${text.detail}  ${easyBank['card__detailDescription']}`}>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
      </section>
      <section className={easyBank.easyBankContainer}>
        <article className={text.container}>
          <div>
            <img src={onlineBanking} />
          </div>
          <h3 className={text.titleCard}>Online Banking</h3>
          <p className={`${text.detail} ${easyBank['card__descriptionCard']}`}>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </article>
        <article className={text.container}>
          <div>
            <img src={budgeting} />
          </div>
          <h3 className={text.titleCard}>Online Banking</h3>
          <p className={`${text.detail} ${easyBank['card__descriptionCard']}`}>
            See exactly where your money goes each month. Receive notifications
            when you're close to hitting your limits.
          </p>
        </article>
        <article className={text.container}>
          <div>
            <img src={onboarding} />
          </div>
          <h3 className={text.titleCard}>Online Banking</h3>
          <p className={`${text.detail} ${easyBank['card__descriptionCard']}`}>
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </article>
        <article className={text.container}>
          <div>
            <img src={api} />
          </div>
          <h3 className={text.titleCard}>Online Banking</h3>
          <p className={`${text.detail} ${easyBank['card__descriptionCard']}`}>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </article>
      </section>
    </section>
  );
};
