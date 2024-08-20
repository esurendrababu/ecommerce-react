import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Ensure you have CartContext set up
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './FourWheeler.css'; // Ensure this path is correct

function FourWheeler() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddClick = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  const items = [
   
    {
      id: 1,
      name: 'Toyota Camry',
      price: 35000,
      imageUrl: 'https://eskipaper.com/images/toyota-camry-3.jpg',
      details: 'Toyota Camry offers a comfortable ride, advanced safety features, and hybrid options.',
    },
    {
      id: 2,
      name: 'Honda Accord',
      price: 37000,
      imageUrl: 'http://www.tflcar.com/wp-content/uploads/2013/06/2014_Honda_Accord_Hybrid_01.jpg',
      details: 'Honda Accord features a spacious interior, powerful engines, and high-tech features.',
    },
    {
      id: 3,
      name: 'Tesla Model 3',
      price: 45000,
      imageUrl: 'https://www.teslarati.com/wp-content/uploads/2021/06/0x0-Model3_19-scaled.jpg',
      details: 'Tesla Model 3 offers electric power, autonomous driving, and minimalist design.',
    },
    {
      id: 4,
      name: 'BMW 3 Series',
      price: 55000,
      imageUrl: 'https://www.bmw.dk/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-cp-design-ext-desktop.jpg',
      details: 'BMW 3 Series features sporty handling, luxurious interior, and cutting-edge technology.',
    },
    {
      id: 5,
      name: 'Audi A4',
      price: 40000,
      imageUrl: 'https://car-images.bauersecure.com/pagefiles/83267/audi_a4_200.jpg',
      details: 'Audi A4 offers a premium interior, quattro all-wheel drive, and advanced infotainment.',
    },
    {
      id: 6,
      name: 'Mercedes-Benz C-Class',
      price: 42000,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.rnn1cv4_DqKtF_e5cAXyogAAAA&pid=Api&P=0&h=180',
      details: 'Mercedes-Benz C-Class features a luxurious interior, advanced safety, and smooth ride.',
    },
    {
      id: 7,
      name: 'Ford Mustang',
      price: 50000,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.KsVRbnQ557wFTuB92eS1-gHaEK&pid=Api&P=0&h=180',
      details: 'Ford Mustang offers iconic design, powerful engines, and thrilling performance.',
    },
    {
      id: 8,
      name: 'Chevrolet Camaro',
      price: 48000,
      imageUrl: 'https://www.hdcarwallpapers.com/walls/2016_chevrolet_camaro_black-wide.jpg',
      details: 'Chevrolet Camaro features bold styling, advanced technology&powerful performance.',
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
              <Button id="colorbtn" onClick={() => handleAddClick(item)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default FourWheeler;
