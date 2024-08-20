import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Ensure you have CartContext set up
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './TwoWheeler.css'; // Ensure this path is correct

function TwoWheeler() {
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
      name: 'Yamaha R15',
      price: 15000,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.1LRXHFmPa5K414xx0-9sfAHaEX&pid=Api&P=0&h=180w',
      details: 'Yamaha R15 features a 155cc engine, sport design, and advanced technology.',
    },
    {
      id: 2,
      name: 'Honda CBR 650R',
      price: 20000,
      imageUrl: 'https://mcn-images.bauersecure.com/wp-images/4765/_honda-cbr650r-01.jpg',
      details: 'Honda CBR 650R offers a 649cc engine, sleek design, and powerful performance.',
    },
    {
      id: 3,
      name: 'Kawasaki Ninja ZX-6R',
      price: 25000,
      imageUrl: 'https://www.totalmotorcycle.com/photos/2007models/2007-Kawasaki-NinjaZX-6Re.jpg',
      details: 'Kawasaki Ninja ZX-6R comes with a 636cc engine,and high performance.',
    },
    {
      id: 4,
      name: 'Ducati Panigale V2',
      price: 30000,
      imageUrl: 'https://robbreport.com/wp-content/uploads/2020/07/ducati_panigale_v2-_2__uc173828_mid.jpg?w=1000',
      details: 'Ducati Panigale V2 features a 955cc engine, cutting-edge , superb handling.',
    },
    {
        id: 5,
        name: 'Avenger 220',
        price: 40000,
        imageUrl: 'https://img.indianautosblog.com/2017/07/Bajaj-Avenger-220-Odin-Reisende-3.0-by-Prodigy-Customs-front-three-quarter.jpg',
        details: 'Ducati Panigale V2 features a 955cc engine, cutting-edge technology, and superb handling.',
      },
      {
        id: 6,
        name: 'Royal enfield',
        price: 40000,
        imageUrl: 'https://wallpaperaccess.com/full/1108337.jpg',
        details: 'Ducati Panigale V2 features a 955cc engine, cutting-edge technology, and superb handling.',
      },
      {
        id: 7,
        name: 'Yamaha mt 15',
        price: 30000,
        imageUrl: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/132425/yamaha-mt-15-left-side-view0.jpeg?isig=0&wm=2&q=75',
        details: 'Ducati Panigale V2 features a 955cc engine, cutting-edge technology, and superb handling.',
      },
      {
        id: 8,
        name: 'Hero spleander plus',
        price: 20000,
        imageUrl: 'https://images.hindustantimes.com/auto/auto-images/bikes/hero/herosplendorplus/exterior_hero-splendor-plus_rear-right-view_600x400.jpg',
        details: 'Ducati Panigale V2 features a 955cc engine, cutting-edge technology, and superb handling with good mileage.',
      },
      
  ];

  return (
    <Row xs={1} md={2} lg={4} className="g-4">
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

export default TwoWheeler;
