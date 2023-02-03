import React from "react";
import { Card } from "../../components/card/Card";
import { cardsData } from "../../components/card/cardsData";
import './Home.css';
export const Home = (props) => {
  return (
    <div className="cards-grid">
      {cardsData.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          content={data.content}
          img={data.img}
        />
      ))}
    </div>
  );
};
