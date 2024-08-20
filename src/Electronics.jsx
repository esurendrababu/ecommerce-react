import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Electronics.css'; // Ensure this path is correct

function Electronics() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddClick = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  const items = [
    {
      id: 1,
      name: 'Dell XPS 13',
      price: 100,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.dK9enpjWmkIN5OAyvMA0RQHaEo&pid=Api&P=0&h=180', 
      details: '13.4" FHD+ display, Intel Core i7, 16GB RAM, 512GB SSD.',
    },
    {
      id: 2,
      name: 'Apple MacBook Air (M2)',
      price: 150,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.gz26nO0ScgI-CygXWgHOnAHaE8&pid=Api&P=0&h=180',
      details: '13.6" Retina display, Apple M2 chip, 8GB RAM, 256GB SSD..',
    },
    {
      id: 3,
      name: 'HP Spectre x360 14',
      price: 200,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.Ri5TNTmen9B7wG3FKX0SugHaE8&pid=Api&P=0&h=180',
      details: '13.5" OLED display, Intel Core i7, 16GB RAM, 1TB SSD..',
    },
    {
      id: 4,
      name: 'Lenovo ThinkPad X1 Carbon Gen',
      price: 250,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.CdP2mMAjtw_Tq8rAd9FtXAHaE8&pid=Api&P=0&h=180',
      details: '14" FHD display, Intel Core i7, 16GB RAM, 512GB SSD..',
    },
    {
      id: 5,
      name: 'Asus ROG Zephyrus G14',
      price: 300,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.JHnuy0j7_xkfyoAkh4yuaQHaE7&pid=Api&P=0&h=180',
      details: '14" QHD display, AMD Ryzen 9, 16GB RAM, 1TB SSD..',
    },
    {
      id: 6,
      name: 'Microsoft Surface Laptop ',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.KH_PdG70o98KaMCTEAj1UwHaFj&pid=Api&P=0&h=180',
      details: '13.5" PixelSense display, Intel Core i5, 8GB RAM, 512GB SSD..',
    },
    {
      id: 7,
      name: 'Razer Blade 15',
      price: 358,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.nadkyYubwX1MDi0ex66OEgHaE8&pid=Api&P=0&h=180',
      details: '15.6" QHD display, Intel Core i7, 16GB RAM, NVIDIA RTX 3070..',
    },
    {
      id: 8,
      name: 'Acer Swift 3',
      price: 350,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.8M2l7gylHsr_A3prX_lmpgHaEr&pid=Api&P=0&h=180',
      details: '14" FHD display, AMD Ryzen 7, 8GB RAM, 512GB SSD..',
    },
    {
      id: 9,
      name: 'LG Gram 16',
      price: 350,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.nbK9c9dp_6enRdaKMqAmcgHaEq&pid=Api&P=0&h=180',
      details: '16" WQXGA display, Intel Core i7, 16GB RAM, 1TB SSD..',
    },
    {
      id: 10,
      name: 'Dell Inspiron 15 7000',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.4VaGBicV6p4WhyvOytblTQHaEK&pid=Api&P=0&h=180',
      details: '5.6" FHD display, Intel Core i5, 8GB RAM, 512GB SSD..',
    },
    {
      id: 11,
      name: 'HP Envy x360 15',
      price: 350,
      imageUrl: 'https://sm.pcmag.com/t/pcmag_uk/review/h/hp-envy-x3/hp-envy-x360-15-2021_cfjr.1920.jpg',
      details: '15.6" FHD display, AMD Ryzen 5, 8GB RAM, 512GB SSD.',
    },
    {
      id: 12,
      name: 'Samsung Galaxy Book ',
      price: 350,
      imageUrl: 'https://www.zdnet.com/a/img/resize/72318b06db30363868675e06f9ea6f9f9ca743ea/2023/01/27/0b3c9dc0-2024-4b42-997e-a0bbac157656/galaxy-book-3-series.jpg?auto=webp&width=1280',
      details: '13.3" AMOLED display, Intel Core i7, 16GB RAM, 512GB SSD....',
    },
    {
      id: 13,
      name: 'Lenovo Yoga 9i',
      price: 350,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.RbXiEBlo0TjEwllefkKUngHaEK&pid=Api&P=0&h=180',
      details: '14" FHD display, Intel Core i7, 16GB RAM, 1TB SSD..',
    },
    {
      id: 14,
      name: 'Asus ZenBook Duo 14',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.i7Oh7gVer9yZ-O5j0-uUhwHaEK&pid=Api&P=0&h=180',
      details: '14" FHD display, Intel Core i7, 16GB RAM, 1TB SSD, dual-screen..',
    },
    {
      id: 15,
      name: 'Alienware m15 R6',
      price: 350,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-ADNkK80hm54NVBtqeSg6AHaEK&pid=Api&P=0&h=180',
      details: '15.6" FHD display, Intel Core i7, 16GB RAM, NVIDIA RTX 3060.',
    },
    {
      id: 16,
      name: 'Huawei MateBook X Pro',
      price: 350,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.vlFa-l4vPvIFmW2xufXCIAHaEK&pid=Api&P=0&h=180',
      details: '13.9" 3K display, Intel Core i7, 16GB RAM, 1TB SSD.',
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

export default Electronics;
