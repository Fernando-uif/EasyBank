import React from "react";
import mockups from "../../assets/images/image-mockups.png";
import header from "../../sass/layout/HeaderImage.module.scss";
import text from "../../sass/base/Text.module.scss";
import button from "../../sass/components/button.module.scss";

export const HeaderImage = () => {
  return (
    <>
      <section className={header.header}>
        <article className={header["header__background"]}>
          <img
            className={header["header__image"]}
            src={mockups}
            alt="mockups.png"
          />
        </article>
        <article
          className={`${text.container} ${header["header__textContainer"]}`}
        >
          <h1 className={` ${text.title}`}>Next generation digital banking</h1>
          <p className={text["detailHeader"]}>
            Take your financial life online. Your Easybank account will be a
            one-stop-stop for spending, saving, budgeting , investing, and much
            more.
          </p>
          <button className={`  ${button.button} `}>request invite</button>
        </article>
      </section>
    </>
  );
};
