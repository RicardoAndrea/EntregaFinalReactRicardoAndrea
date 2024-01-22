import React, { useEffect, useState } from "react";


const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter" style={{ pointerEvents: isNaN(stock) || stock <= 0 ? 'none' : 'auto', display: 'flex', alignItems: 'center' }}>
			<button disabled={count <= 1} onClick={decrease} className="btn btn-primary operacion">
				-
			</button>
			<span className="ms-2 me-2" style={{ textDecoration: 'none', color: 'black' }}>{count}</span>
			<button disabled={count >= stock || isNaN(stock)} onClick={increase} className="btn btn-primary operacion">
				+
			</button>
			
			<div>
				<button disabled={stock <= 0 || isNaN(stock)} onClick={() => onAdd(count)} className="btn btn-primary">
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;