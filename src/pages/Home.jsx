import React from "react";
import { Card } from "../components/card/Card";
import { cardsData } from "../components/card/cardsData";

export const Home = (props) => {
  return (
    <div>
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
