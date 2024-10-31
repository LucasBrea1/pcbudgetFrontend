import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const ComponentCard = ({ id, name, description, price, image }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ id, name, price, image }));
    };

    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
                    ${price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={handleAddToCart}>
                    Añadir al carrito
                </Button>
            </CardActions>
        </Card>
    );
};

export default ComponentCard;
