import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Mobiles.css'; // Ensure this path is correct

function Mobiles() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddClick = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  // Array of item data including unique image URLs and details
  const items = [
    {
      id: 1,
      name: 'Samsung Galaxy S9',
      price: 100,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.XqH_MDc2mofdNWFkMUOolQHaD4&pid=Api&P=0&h=180', // Replace with actual image URLs
      details: 'Mobile 1 has a 5.5-inch display, 12MP camera, and 3000mAh battery.',
    },
    {
      id: 2,
      name: ' Realme 9',
      price: 150,
      imageUrl: 'https://phonereview24.com/wp-content/uploads/2021/06/realme-9.jpg',
      details: 'Mobile 2 features a 6-inch display, 16MP camera, and 3500mAh battery.',
    },
    {
      id: 3,
      name: 'Oppo F7',
      price: 200,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.TttAzk3VsgFCs8XHqG55ngHaE8&pid=Api&P=0&h=180',
      details: 'Mobile 3 comes with a 6.5-inch display, 20MP camera, and 4000mAh battery.',
    },
    {
      id: 4,
      name: 'Google Pixel 2',
      price: 250,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.t9k0caETsr-Rxkm-ErXnZwHaE3&pid=Api&P=0&h=180',
      details: 'Mobile 4 has a 6.7-inch display, 24MP camera, and 4500mAh battery.',
    },
    {
      id: 5,
      name: 'LG V30',
      price: 300,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.HjXOWvbZUpok6SmxCuCx8AHaEK&pid=Api&P=0&h=180',
      details: 'Mobile 5 features a 7-inch display, 28MP camera, and 5000mAh battery.',
    },
    {
      id: 6,
      name: 'Xiaomi Mi 9',
      price: 350,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.K256LYYO67YdXluPaG_NtgHaEK&pid=Api&P=0&h=180',
      details: 'Mobile 6 comes with a 7.2-inch display, 32MP camera, and 5500mAh battery.',
    },
    {
      id: 7,
      name: 'Apple iPhone X',
      price: 358,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.SgC8K1OkI8GI2DH5RnS0DAHaEK&pid=Api&P=0&h=180',
      details: 'Mobile 7 has a 5.8-inch display, 12MP dual camera, and 3100mAh battery.',
    },
    {
      id: 8,
      name: 'Sony Xperia XZ2 ',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Gl9RMqAb8kPJy5rFMMvG4wHaE8&pid=Api&P=0&h=180',
      details: 'Mobile 8 features a 6.3-inch display, 18MP camera, and 3600mAh battery.',
    },
    {
      id: 9,
      name: 'Huawei P20',
      price: 350,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.TabfYtnDzyz1meL2MGZgvQHaD4&pid=Api&P=0&h=180',
      details: 'Mobile 9 comes with a 6.4-inch display, 22MP camera, and 4100mAh battery.',
    },
    {
      id: 10,
      name: 'OnePlus 6',
      price: 350,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.g2BvmVwZf4mgqAo3Mk-AdAHaEK&pid=Api&P=0&h=180',
      details: 'Mobile 10 has a 6.6-inch display, 26MP camera, and 4600mAh battery.',
    },
    {
      id: 11,
      name: 'Google Pixel 2 XL',
      price: 350,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.9rN3NB3jZtNaza6lH84PPQHaD4&pid=Api&P=0&h=180',
      details: 'Mobile 11 features a 6.9-inch display, 30MP camera, and 5100mAh battery.',
    },
    {
      id: 12,
      name: 'Sony Xperia',
      price: 350,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.nhuNsdikhjc2qIs2dFOO7wHaEK&pid=Api&P=0&h=180',
      details: 'Mobile 12 comes with a 5.5-inch display, 14MP camera, and 2900mAh battery.',
    },
    {
      id: 13,
      name: 'HTC U12+',
      price: 350,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.TyzyTbE-7M7MihQxeZdCBwHaEK&pid=Api&P=0&h=180',
      details: 'Mobile 13 has a 6-inch display, 20MP camera, and 3300mAh battery.',
    },
    {
      id: 14,
      name: 'Nokia 7 Plus',
      price: 350,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.BiE0KWaAJ2fangNYPSUoFAAAAA&pid=Api&P=0&h=180',
      details: 'Mobile 14 features a 6.2-inch display, 24MP camera, and 3700mAh battery.',
    },
    {
      id: 15,
      name: 'Motorola Moto G6',
      price: 350,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.bTy48etGl37WlfBPdpsIQgHaEK&pid=Api&P=0&h=180',
      details: 'Mobile 15 comes with a 6.5-inch display, 28MP camera, and 4200mAh battery.',
    },
    {
      id: 16,
      name: 'Huawei Mate 10 Pro',
      price: 350,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.WaHNk9AJ1hJmmVJRvrAKwwHaEK&pid=Api&P=0&h=180',
      details: 'Mobile 16 has a 6.8-inch display, 32MP camera, and 4700mAh battery.',
    },
  ];

  return (
    <Row xs={1} md={4} className="g-5">
      {items.map((item) => (
        <Col key={item.id}>
          <Card>
            <Card.Img className="imagepics" variant="top" src={item.imageUrl} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.details}
                <br />
                Price: ${item.price}
              </Card.Text>
              <Button id='colorbtn' onClick={() => handleAddClick(item)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Mobiles;
