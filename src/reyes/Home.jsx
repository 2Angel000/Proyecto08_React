import React from "react";
import ataulfo from "../images/rey_ataulfo.png";
import atanagildo from "../images/rey_atanagildo.png";
import ervigio from "../images/rey_ervigio.png";
import leogivildo from "../images/rey_leogivildo.png";
import recesvinto from "../images/rey_recesvinto.png";
import sisebuto from "../images/rey_sisebuto.png";
import { Link } from "react-router-dom";

export default function Home() {
  const lista = [
    atanagildo,
    ervigio,
    sisebuto,
    ataulfo,
    leogivildo,
    recesvinto,
  ];
  //agregar un método para devolver una cadena
  //sólo con el nombre del rey [quitar keys aleatorias]
  return (
    <div className="reyes">
      {lista.map((reyAux) => (
        <Link to={`/reyes/${reyAux}`}>
          <img src={reyAux} alt="" />
        </Link>
      ))}
    </div>
  );
}
