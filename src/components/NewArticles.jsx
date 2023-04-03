import React from "react";
import "./NewArticles.css";
export default function NewArticles() {
  const data = [
    {
      heading: "Hydrogen VS Electric Cars",
      detail: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      heading: "The Downsides of AI Artistry",
      detail:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      heading: "Is VC Funding Drying Up?",
      detail:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <aside className="new-articles">
      <div className="container new-articles__container">
        <h2>New</h2>
        {data.map((e) => {
          return (
            <article className="new-articles__article">
              <h3 className="new-articles__heading">{e.heading}</h3>
              <p className="new-articles__detail">{e.detail}</p>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
