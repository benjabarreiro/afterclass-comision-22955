import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getFirestore } from "../firebase";

const arrayProducts = [
  { id: "1", name: "product 1" },
  { id: "2", name: "product 2" },
  { id: "3", name: "product 3" },
  { id: "4", name: "product 4" },
  { id: "5", name: "product 5" },
];

export default function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const fetchData = db.collection("items");

    fetchData
      .get()
      .then((querySnapshot) =>
        setItems(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        )
      );
  }, []);
  return (
    <div>
      {items.map((el) => (
        <div>
          <span>{el.title}</span>
          <Link to={`/detail/${el.id}`}>Ir al detalle</Link>
        </div>
      ))}
    </div>
  );
}
