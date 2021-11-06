import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore } from "../firebase";

const arrayProducts = [
  { id: "1", name: "product 1" },
  { id: "2", name: "product 2" },
  { id: "3", name: "product 3" },
  { id: "4", name: "product 4" },
  { id: "5", name: "product 5" },
];

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const fetchData = db.collection("items").doc(id);

    fetchData
      .get()
      .then((querySnapshot) =>
        setItem({ id: querySnapshot.id, ...querySnapshot.data() })
      );
  }, [id]);
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.pictureUrl} alt={item.title} />
      <span>{item.description}</span>
      <Link to="/">Ir al home</Link>
    </div>
  );
}
