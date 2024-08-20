import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Furniture.css'; // Ensure this path is correct

function Furniture() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddClick = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  // Array of furniture item data with actual details and image URLs
  const items = [
    {
      id: 1,
      name: 'Modern Sofa',
      price: 800,
      imageUrl: 'https://wallpapercave.com/wp/wp2305568.jpg', 
      details: 'Material: Linen fabric, wooden frame. Dimensions: 84" W x 35" D x 34" H. Weight Capacity: 750 lbs.',
    },
    {
      id: 2,
      name: 'Dining Table Set',
      price: 1200,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.mwb_NiO0aE-Uszl7XU_LJgHaE8&pid=Api&P=0&h=180',
      details: 'Material: Solid wood, tempered glass top. Dimensions: Table: 72" L x 36" W x 30" H. Seating Capacity: 6.',
    },
    {
      id: 3,
      name: 'Leather Recliner',
      price: 600,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.hnQrMYtb9Gq-uilauJwipgHaHa&pid=Api&P=0&h=180',
      details: 'Material: Top-grain leather, metal frame. Dimensions: 40" W x 37" D x 41" H. Weight Capacity: 300 lbs.',
    },
    {
      id: 4,
      name: 'Queen Size Bed Frame',
      price: 900,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.bfhiJ4EU8Uk0En09rEEBcwAAAA&pid=Api&P=0&h=180',
      details: 'Material: Solid wood, upholstered headboard. Dimensions: 65" W x 85" L x 50" H. Slat support system.',
    },
    {
      id: 5,
      name: 'Office Desk',
      price: 400,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.LgTUzBR2pLAPypxf1VZsXwHaEK&pid=Api&P=0&h=180',
      details: 'Material: MDF wood, metal legs. Dimensions: 60" W x 24" D x 30" H. Features: Cable management.',
    },
    {
      id: 6,
      name: 'Bookshelf',
      price: 250,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.XhlqvMHkRIYcUCGAY52-twHaEK&pid=Api&P=0&h=180',
      details: 'Material: Engineered wood. Dimensions: 36" W x 12" D x 72" H. 5 adjustable shelves. Weight Capacity: 250 lbs',
    },
    {
      id: 7,
      name: 'Coffee Table',
      price: 300,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.tmSSir1LHNlchWB3hGrn9gAAAA&pid=Api&P=0&h=180',
      details: 'Material: Glass top, metal frame. Dimensions: 48" L x 24" W x 18" H. Tempered glass, lower storage shelf.',
    },
    {
      id: 8,
      name: 'Accent Chair',
      price: 350,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.IvHyGvd9rJvKpv7FZRg8ogAAAA&pid=Api&P=0&h=180',
      details: 'Material: Velvet fabric, wooden legs. Dimensions: 29" W x 30" D x 35" H. Weight Capacity: 250 lbs.',
    },
    {
      id: 9,
      name: 'Bar Stools (Set of 2)',
      price: 200,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.pUMLW0aJqqLVictCDRflLQHaHa&pid=Api&P=0&h=180',
      details: 'Material: Faux leather, metal base. Adjustable seat height: 24" to 32". Swivel, footrest.',
    },
    {
      id: 10,
      name: 'TV Stand',
      price: 500,
      imageUrl: 'https://m.media-amazon.com/images/I/81msa9JAyXL._AC_SL1500_.jpg',
      details: 'Material: Wood veneer, metal accents. Dimensions: 60" W x 16" D x 24" H. Fits TV Size: Up to 65".',
    },
    {
      id: 11,
      name: 'Chest of Drawers',
      price: 450,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.nceJ15X7sF-MBwmEip6CLwHaFU&pid=Api&P=0&h=180',
      details: 'Material: Solid wood. Dimensions: 36" W x 18" D x 50" H. 5 spacious drawers.Weight Capacity: 250 lbs',
    },
    {
      id: 12,
      name: 'Patio Set',
      price: 700,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.DLB8PYdnXjjThqLEI1GfwwHaEO&pid=Api&P=0&h=180',
      details: 'Material: Rattan wicker, glass top table.  Seating Capacity: 4. Water-resistant cushions.Weight Capacity: 250 lbs',
    },
    {
      id: 13,
      name: 'Dresser',
      price: 600,
      imageUrl: 'https://m.media-amazon.com/images/I/71QoLDDdvNL._AC_SL1500_.jpg',
      details: 'Material: Engineered wood. Dimensions: 54" W x 16" D x 32" H. 6 large drawers. Weight Capacity: 250 lbs',
    },
    {
      id: 14,
      name: 'Wardrobe',
      price: 800,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.StnfipM4j8NM4hg6E85cWQHaEK&pid=Api&P=0&h=180',
      details: 'Material: Solid pine wood. Dimensions: 40" W x 24" D x 72" H. Hanging rod, adjustable shelves.',
    },
    {
      id: 15,
      name: 'Nightstand',
      price: 150,
      imageUrl: 'https://i5.walmartimages.com/asr/696ed8e4-eb20-452d-be1e-5f92b791b2a8.7380383e48dfa3c5190a3ce4b887b605.jpeg',
      details: 'Material: MDF wood, metal handles. Dimensions: 20" W x 16" D x 24" H. 2 drawers.',
    },
    {
      id: 16,
      name: 'Console Table',
      price: 350,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.3xU912ajIXPqmQDt-nrdYwHaHa&pid=Api&P=0&h=180',
      details: 'Material: Metal frame, marble top. Dimensions: 48" L x 14" W x 30" H. Lower shelf, slim design.',
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

export default Furniture;
