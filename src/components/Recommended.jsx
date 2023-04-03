import React from "react";
import "./Recommended.css";
import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";
export default function Recommended() {
  const data = [
    {
      id: "01",
      title: "Reviving Retro PCs",
      desc: "What happens when old PCs are given modern upgrades?",
      img: img1,
    },
    {
      id: "02",
      title: "Top 10 Laptops of 2022",
      desc: "Our best picks for various needs and budgets.",
      img: img2,
    },
    {
      id: "03",
      title: "The Growth of Gaming",
      desc: "How the pandemic has sparked fresh opportunities.",
      img: img3,
    },
  ];
  return (
    <section className="recommended">
      <div className="container recommended__container">
        {data.map((e) => {
          return (
            <article className="recommended__item">
              <img
                className="recommended__item-img"
                src={e.img}
                alt="article image"
              />
              <div className="recommended__item-detail">
                <p className="recommended__item-id">{e.id}</p>
                <h3 className="recommended__item-title">{e.title}</h3>
                <p className="recommended__item-desc">{e.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
