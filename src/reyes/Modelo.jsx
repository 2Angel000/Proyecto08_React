import React from "react";
import { useParams } from "react-router-dom";
import ataulfo from "../images/rey_ataulfo.png";
import atanagildo from "../images/rey_atanagildo.png";
import ervigio from "../images/rey_ervigio.png";
import leogivildo from "../images/rey_leogivildo.png";
import recesvinto from "../images/rey_recesvinto.png";
import sisebuto from "../images/rey_sisebuto.png";

export default function Modelo() {
  const lista = [
    atanagildo,
    ervigio,
    sisebuto,
    ataulfo,
    leogivildo,
    recesvinto,
  ];
/*
<div className="reyes">
      {lista.map((reyAux) => (
        <Link to={`/reyes/${reyAux}`}>
          <img src={reyAux} alt="" />
        </Link>
      ))}
    </div>
*/
  const { rey } = useParams();
  const reyCompleto = rey.substring(0, 1).toUpperCase() + rey.substring(1);

  return (
    <div>
      <img src={rey} alt="" />
      <h1>{reyCompleto}</h1>
    </div>
  );
}
