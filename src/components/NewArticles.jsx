import React from "react";
import "./NewArticles.css";
export default function NewArticles() {
  const data = [
    {
      title: "Hydrogen VS Electric Cars",
      desc: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      desc: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <aside className="new-articles">
      <div className="container new-articles__container">
        <h2>New</h2>
        {data.map((e) => {
          return (
            <article className="new-articles__article">
              <h3 className="new-articles__title">{e.title}</h3>
              <p className="new-articles__desc">{e.desc}</p>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
