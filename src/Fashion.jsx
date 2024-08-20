import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Fashion.css'; // Ensure this path is correct

function Fashion() {
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
      name: 'Athleisure',
      price: 100,
      imageUrl: 'https://theinscribermag.com/wp-content/uploads/2020/03/021320_AthleisureImage-002.jpg', 
      details: ' Combining athletic wear with leisure clothing for a stylish and comfortable look..',
    },
    {
      id: 2,
      name: '	Streetwear',
      price: 150,
      imageUrl: 'https://wallpaperaccess.com/full/2122980.jpg',
      details: ' Influenced by urban culture, featuring graphic tees,hoodies,sneakers,and casual ..',
    },
    {
      id: 3,
      name: '	Boho',
      price: 200,
      imageUrl: 'https://i.pinimg.com/originals/ed/cc/35/edcc352e98352d564e2352d2b0cea9d1.jpg',
      details: 'Bohemian style with flowy dresses, fringe, earthy tones, and vintage ...',
    },
    {
      id: 4,
      name: 'Minimalist ',
      price: 250,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.AD3UXm94Y4NPaDRzIHJQogHaFD&pid=Api&P=0&h=180',
      details: 'Simple, clean lines with neutral colors and understated pieces..',
    },
    {
      id: 5,
      name: 'Vintage/Retro',
      price: 300,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.1tUqbOGlXo5gbH2tag6mgwHaE8&pid=Api&P=0&h=180',
      details: " Inspired by past decades, like the '70s, '80s, or '90s, incorporating those era's trends into modern outfits..",
    },
    {
      id: 6,
      name: 'Casual Chic',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.e6bZ8Ni2OEhz5NQF8bTRVwHaEm&pid=Api&P=0&h=180',
      details: 'MCombining casual pieces like jeans and t-shirts with more elegant items like blazers or heels..',
    },
    {
      id: 7,
      name: 'Techwear',
      price: 358,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.4r0U3ev5gHH7fMjnfgnqEwHaEK&pid=Api&P=0&h=180',
      details: 'Functional, futuristic clothing often featuring technical fabrics, multiple pockets, and a utilitarian look.',
    },
    {
      id: 8,
      name: 'Business Casual',
      price: 350,
      imageUrl: 'https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/03/work-casual.jpg',
      details: 'A relaxed yet professional look, often seen in workplaces, featuring blouses, chinos, and blazers..',
    },
    {
      id: 9,
      name: '	E-Girl/E-Boy ',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.R1a-yKmvR9E3jORnt_GP0wHaEo&pid=Api&P=0&h=180',
      details: 'Influenced by internet culture, dyed hair&a mix of grunge and anime-inspired clothing',
    },
    {
      id: 10,
      name: 'Cottagecore',
      price: 350,
      imageUrl: 'https://i.etsystatic.com/27230750/r/il/bb19ae/3016113290/il_fullxfull.3016113290_2hmd.jpg',
      details: 'Romanticizing rural life with floral prints,flowing dresses&vintage-inspired..',
    },
    {
      id: 11,
      name: 'Preppy',
      price: 350,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.8PWuXCxV5AJt31CeghsdzAHaEK&pid=Api&P=0&h=180',
      details: 'Inspired by collegiate style, with polo shirts, blazers, and loafers..',
    },
    {
      id: 12,
      name: 'High Fashion',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Z4MEHP1J_Dflyzv_Mwnu1QHaEo&pid=Api&P=0&h=180',
      details: 'Designer clothing, often avant-garde and runway-inspired.',
    },
    {
      id: 13,
      name: ' Androgynous',
      price: 350,
      imageUrl: 'https://i.pinimg.com/originals/2d/d0/5a/2dd05a5dee7043e73f202f2669c674a5.jpg',
      details: 'Blurring gender lines with clothing that can be worn by any gender.',
    },
    {
      id: 14,
      name: 'Eco-Friendly ',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.o2WexKBqwL1Q1Rz8pJ7PUAHaER&pid=Api&P=0&h=180',
      details: 'Sustainable fashion focusing on eco-friendly materials and ethical production..',
    },
    {
      id: 15,
      name: 'Y2K Fashion',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.MbNT4K5OHJV-eMtZcOS0ZgHaEo&pid=Api&P=0&h=180',
      details: 'Inspired by the early 2000s,featuring low-rise jeans,crop tops&vibrant accessories.',
    },
    {
      id: 16,
      name: 'Loungewear',
      price: 350,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.0TIkI6_e-LRVCvi6sTb4nQHaEI&pid=Api&P=0&h=180',
      details: 'Comfortable,relaxed clothing  for lounging at home stylish enough wear outside.',
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

export default Fashion;
