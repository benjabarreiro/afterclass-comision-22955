import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

const arrayProducts = [
	{ id: "1", name: "product 1" },
	{ id: "2", name: "product 2" },
	{ id: "3", name: "product 3" },
	{ id: "4", name: "product 4" },
	{ id: "5", name: "product 5" },
  ];

export default function ItemDetailContainer() {
	const [item, setItem] = useState({})
	const {id} = useParams()
	useEffect(() => {
		const findItem = arrayProducts.filter(item => item.id === id)
		setItem(...findItem)
	}, [id])
	return (
		<div>
			<h1>{item.name}</h1>
			<Link to="/">Ir al home</Link>
		</div>
	)
}
