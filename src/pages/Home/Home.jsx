import React from "react";
import { Card } from "../../components/card/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

export const Home = () => {
  const [actores, setListadoActores] = useState([]);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const url = "https://rickandmortyapi.com/api/character";
      const result = await axios.get(url);
      setListadoActores(result.data.results);
    };
    obtenerPersonajes();
  }, []);
  console.log(actores);

  return (
    <div className="grid">
      <div className="cards-grid">
        {actores.map((data, i) => (
          <Card
            key={data.id}
            title={data.name}
            subtitle={data.status}
            content={data.species}
            img={data.image}
          />
        ))}
      </div>
    </div>
  );
};
