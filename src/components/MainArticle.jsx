import React from "react";
import mainArticleImageDesktop from "../assets/images/image-web-3-desktop.jpg";
import mainArticleImageMobile from "../assets/images/image-web-3-mobile.jpg";
import "./MainArticle.css";
export default function MainArticle() {
  return (
    <main className="main-article">
      <div className="container main-article__container">
        <picture className="main-article-image">
          <source media="(min-width:700px)" srcset={mainArticleImageDesktop} />
          <img src={mainArticleImageMobile} alt="hero image" />
        </picture>
        <div className="main-article__text two-columns">
          <h1 className="main-article__heading two-columns__left">
            The Bright Future Of Web 3.0?
          </h1>
          <div className="two-columns__right">
            <p className="main-article__description">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <a href="#" className="cta main-article__cta">
              Read More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
