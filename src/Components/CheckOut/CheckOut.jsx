import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import {getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [mensaje, setMensaje] = useState('');

    const { cart, totalPrice, removeProduct, clearCart } = useCartContext();

    const manejadorForm = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError(<span style={{ color: 'white' }}>Complete todos los campos</span>);
            return;
        }
        if (email !== emailConfirmacion) {
            setError(<span style={{ color: 'white' }}>Los emails no coinciden</span>);
            return;
        }

        const total = totalPrice();
        const orden = {
            items: cart.map((producto) => ({
                id: producto.id,
                title: producto.title,
                price: producto.price,
                quantity: producto.quantity,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const db = getFirestore();
                const productoRef = doc(db, 'products', productoOrden.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.quantity,
                });
            })
        )
            .then(() => {
                const db = getFirestore();
                addDoc(collection(db, 'orders'), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        removeProduct();
                        clearCart();
                        
                    })
                    .catch((error) => {
                        console.log('No se creó la orden', error);
                        setError(<span style={{ color: 'white' }}>Error en la orden</span>);
                    });
            })
            .catch((error) => {
                console.log('No se pudo actualizar el stock', error);
                setError(<span style={{ color: 'white' }}>Error al modificar el stock</span>);
            });

        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailConfirmacion('');
        setMensaje('');
    };





    return (
        <div className="d-flex align-items-center justify-content-center flex-wrap bg-success" style={{ height: '100%' }}>

            <div style={{ width: '50%' }}>

                {!ordenId ? (
                    <Form onSubmit={manejadorForm} >
                        <h2 className="mt-5 text-white" >Complete el siguiente formulario</h2>

                        {cart.map((producto) => {
                            <div key={producto.id}>
                                <p>{''} {producto.nombre} {producto.cantidad} </p>
                                <p> {producto.precio} </p>
                            </div>
                        })}

                        <Form.Group className="mt-5 mb-5 text-white" controlId="formBasicNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-5 text-white" controlId="formBasicApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-5 text-white" controlId="formBasicTelefono">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-5 text-white" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-5 text-white" controlId="formBasicConfirmarEmail">
                            <Form.Label>Confirmar Email</Form.Label>
                            <Form.Control type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                        </Form.Group>

                        {error && <p>{error}</p>}
                        <Button className='mb-5' variant="primary" type="submit">
                            Terminar
                        </Button>
                    </Form>
                ) : (
                    <div className='bg-success' style={{ height: '84vh' }}>
                        <p className='bg-primary text-white text-center mt-5' style={{ fontSize: '23px', borderRadius: '10px', padding: '10px' }}>¡Gracias por tu compra! Aquí tienes tu numero de seguimiento: <br /> {''} {ordenId} {''}</p>
                        <Link to="/">
                            {' '}
                            <button className="btn btn-primary">Ir al inicio</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckOut