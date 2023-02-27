import text from "../../sass/base/Text.module.scss";
import onlineBanking from "../../assets/images/icon-online.svg";
export const ChooseBank = () => {
  return (
    <>
      <h2 className={text.subtitle}>why choose Easybank?</h2>
      <p className={text.detail}>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before
      </p>
      <section>
        <article className={text.container}>
          <div>
            <img src={onlineBanking} />
          </div>
          <h3 className={text.titleCard}>Online Banking</h3>
          <p className={text.detail}>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </article>
        <article className={text.container}>
          <div>
            <img src={onlineBanking} />
          </div>
          <h3 className={text.titleCard}>Online Banking</h3>
          <p className={text.detail}>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </article>
        <article className={text.container}>
          <div>
            <img src={onlineBanking} />
          </div>
          <h3 className={text.titleCard}>Online Banking</h3>
          <p className={text.detail}>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </article>
        <article className={text.container}>
          <div>
            <img src={onlineBanking} />
          </div>
          <h3 className={text.titleCard}>Online Banking</h3>
          <p className={text.detail}>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </article>

      </section>
    </>
  );
};
