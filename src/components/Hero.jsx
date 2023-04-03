import React from "react";
import "./Hero.css";
import MainArticle from "./MainArticle";
import NewArticles from "./NewArticles";
import Recommended from "./Recommended";

export default function Hero() {
  return (
    <section className="hero container">
      <MainArticle />
      <NewArticles />
      <Recommended />
    </section>
  );
}
