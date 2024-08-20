import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Toys.css';     

function Toys() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddClick = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  const items = [
    {
      id: 1,
      name: 'Toy Car',
      price: 15,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.XBfsjul5XxNAAJLUGNRsVAHaEo&pid=Api&P=0&h=180',
      details: 'A sleek, red toy car with realistic features and smooth rolling wheels.',
    },
    {
      id: 2,
      name: 'Action Figure',
      price: 25,
      imageUrl: 'https://i.pinimg.com/originals/04/7d/32/047d328f61b55343ae89668225a87c17.jpg',
      details: 'A superhero action figure with articulated limbs and a detailed costume.',
    },
    {
      id: 3,
      name: 'Stuffed Animal',
      price: 18,
      imageUrl: 'https://tse2.explicit.bing.net/th?id=OIP.nEKqNdQXTxzpYjTnWNApiwHaE8&pid=Api&P=0&h=180',
      details: 'A soft and cuddly stuffed bear, perfect for snuggling.',
    },
    {
      id: 4,
      name: 'Building Blocks',
      price: 30,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.PdGap_ARaPi2qilW4BYRiwHaE8&pid=Api&P=0&h=180',
      details: 'A set of colorful building blocks to inspire creativity and motor skills.',
    },
    {
      id: 5,
      name: 'Dollhouse',
      price: 50,
      imageUrl: 'https://wallpaperaccess.com/full/8815492.png',
      details: 'A beautiful dollhouse with multiple rooms and miniature furniture.',
    },
    {
      id: 6,
      name: 'Puzzle',
      price: 12,
      imageUrl: 'https://wallpaper-house.com/data/out/8/wallpaper2you_278211.jpg',
      details: 'A challenging 500-piece puzzle with a scenic landscape image.',
    },
    {
      id: 7,
      name: 'Remote Control Helicopter',
      price: 45,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.MzDt6tpFBrJo2q0rAcG-wwHaE5&pid=Api&P=0&h=180',
      details: 'A remote-controlled helicopter with smooth flying capabilities.',
    },
    {
      id: 8,
      name: 'Toy Train Set',
      price: 35,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.7PFfmb1BeRuoUrHQ-kn6_AHaGs&pid=Api&P=0&h=180',
      details: 'A classic toy train set with tracks, engine, and cars.',
    },
    {
      id: 9,
      name: 'LEGO Set',
      price: 40,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.OIYhVkRMY5_Ck2WtxF41gQHaEo&pid=Api&P=0&h=180',
      details: 'A LEGO building set with pieces to create a spaceship.',
    },
    {
      id: 10,
      name: 'Toy Robot',
      price: 55,
      imageUrl: 'https://wallpaperaccess.com/full/6792363.jpg',
      details: 'A programmable robot toy with lights, sounds, and movement.',
    },
    {
      id: 11,
      name: 'Water Gun',
      price: 20,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.Y9KQ49e5w1lkkesW1hILtQHaEK&pid=Api&P=0&h=180',
      details: 'A large water gun for fun outdoor water battles.',
    },
    {
      id: 12,
      name: 'Toy Kitchen Set',
      price: 60,
      imageUrl: 'https://i5.walmartimages.com/asr/6a86a127-448e-4296-8457-cfa9c24fbc85_3.e45999beb1d7e3d110c8149f40f4d4cf.jpeg',
      details: 'A full kitchen playset with utensils, food items, and cooking tools.',
    },
    {
      id: 13,
      name: 'Stuffed Dinosaur',
      price: 22,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.3DmdPLFDbvaGxiZd0aRUcwHaHa&pid=Api&P=0&h=180',
      details: 'A cute stuffed dinosaur with soft, green fabric and friendly eyes.',
    },
    {
      id: 14,
      name: 'Toy Drum Set',
      price: 38,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.CmrGyf590az4Qeoca6hiRAHaHa&pid=Api&P=0&h=180',
      details: 'A toy drum set for young musicians to practice their rhythm.',
    },
    {
      id: 15,
      name: 'Toy Airplane',
      price: 28,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.VMlfdRzBPV-D14BOGeITbQHaHa&pid=Api&P=0&h=180',
      details: 'A toy airplane with realistic designs and spinning propellers.',
    },
    {
      id: 16,
      name: 'Toy Camera',
      price: 25,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.ufIVWcigY0vuR5J6jjYakAHaFL&pid=Api&P=0&h=180',
      details: 'A toy camera that clicks and flashes, perfect for budding photographers.',
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

export default Toys;
