import React from "react";
import { Link } from "react-router-dom";

const arrayProducts = [
  { id: "1", name: "product 1" },
  { id: "2", name: "product 2" },
  { id: "3", name: "product 3" },
  { id: "4", name: "product 4" },
  { id: "5", name: "product 5" },
];

export default function ItemListContainer() {
  return (<div>
	  {arrayProducts.map(el => (
		  <div>
			  <span>{el.name}</span>
			  <Link to={`/detail/${el.id}`}>Ir al detalle</Link>
		  </div>
	  ))}
  </div>);
}
