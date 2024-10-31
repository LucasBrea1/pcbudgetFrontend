import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/CartSlice';
import jsPDF from 'jspdf';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function Carrito() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Carrito de compras PCbudget', 10, 10);

    let y = 20;
    cartItems.forEach(item => {
      doc.text(`${item.name} - $${item.price} x ${item.quantity}`, 10, y);
      y += 10;
    });

    doc.text(`Total: $${totalAmount}`, 10, y + 10);

    doc.save('carrito.pdf');
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 2 }}> 
      <h1>Carrito de compras</h1>
        
      {cartItems.length === 0 ? (
        <h3>El carrito está vacío</h3>
        ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><h3>Producto</h3></TableCell>
              <TableCell><h3>Precio</h3></TableCell>
              <TableCell><h3>Cantidad</h3></TableCell>
              <TableCell><h3>Añadir</h3></TableCell>
              <TableCell><h3>Quitar</h3></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>(x{item.quantity})</TableCell>
                <TableCell><Button onClick={() => handleAddToCart(item)}>Añadir uno</Button></TableCell>
                <TableCell><Button onClick={() => handleRemoveFromCart(item.id)}>Quitar uno</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
        
    <div>
      <h3>Total: ${totalAmount}</h3>
      <Button onClick={handleClearCart}>Limpiar carrito</Button>
      <Button onClick={handleExportPDF}>Exportar como PDF</Button>
    </div>
  </Box>
  );
}

export default Carrito
