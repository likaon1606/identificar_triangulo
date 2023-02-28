import React, { useState } from "react";
import "../styles/style.css";
import equilatero from '../assets/equilatero.jpg';
import isosceles from '../assets/isosceles.jpg';
import escaleno from '../assets/escaleno.jpg';

const Triangule = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const [resul, setResul] = useState("");

  const handle = (e) => {
    e.preventDefault();
    setResul(
      x > 0 && y > 0 && z > 0 ?
      x === y && y === z ? (
        <img src={equilatero} alt='equilatero'/>
      ) : x === y || x === z || y === z ? (
        <img src={isosceles} alt='isosceles'/>
      ) : (
        <img src={escaleno} alt='escaleno'/>
      ) : <p className="p">El número debe ser mayor a cero</p>
    );
  };

  return (
    <div>
      <div className="title">
        <h1>Identifica el tipo de triángulo</h1>
        <h3>Coloca los valores, para conocer el tipo de triángulo que se relaciona según los ángulos ingresados.</h3>
      </div>
      <form>
        <div className="container">
        <label htmlFor="a">Ángulo a): </label>
        <input
          type="number"
          placeholder="Ingresa el valor del lado"
          onChange={(e) => setX(e.target.value)}
        />
        </div>
        <div className="container">
        <label htmlFor="b">Ángulo b): </label>
        <input
          type="number"
          placeholder="Ingresa el valor del lado"
          onChange={(e) => setY(e.target.value)}
        />
        </div>
        <div className="container">
        <label htmlFor="c">Ángulo c): </label>
        <input
          type="number"
          placeholder="Ingresa el valor del lado"
          onChange={(e) => setZ(e.target.value)}
        />
        </div>
        <div className="button">
        <button type="submit" onClick={handle}>
          Resultado
        </button>
        </div>
        <div className="image">
          {resul}
        </div>
      </form>
    </div>
  );
};

export default Triangule;
