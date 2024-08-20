import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Appliances.css'; // Ensure this path is correct

function Appliances() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddClick = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  const items = [
    {
      id: 1,
      name: 'Refrigerator',
      price: 100,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.wxT2NFZXOmUq4qyaHOh9KgHaGl&pid=Api&P=0&h=180', 
      details: ' Preserves food by keeping it cool or frozen, extending the shelf life of perishable items..',
    },
    {
      id: 2,
      name: 'Microwave Oven',
      price: 150,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.xgMwaUST_lpfEm8NcqxtQAHaFL&pid=Api&P=0&h=180',
      details: 'Heats and cooks food quickly using microwave radiation; useful for reheating leftovers, cooking frozen meals, and defrosting..',
    },
    {
      id: 3,
      name: 'Washing Machine',
      price: 200,
      imageUrl: 'https://www.thespruce.com/thmb/EMVsLEwPd2-LSYmC8EXbZF5rhvY=/1999x1500/filters:fill(auto,1)/Washingmachinelaundryroom-GettyImages-171578869-734c3cd392f04f24aca8768fa45d61a7.jpg',
      details: 'Cleans clothes by washing them with water and detergent, often with various cycle options for different fabrics..',
    },
    {
      id: 4,
      name: 'Dryer',
      price: 250,
      imageUrl: 'https://www.thespruce.com/thmb/P-DJHWnHo46kBYI8At5Kh8qaY-w=/fit-in/1000x1000/filters:no_upscale():max_bytes(150000):strip_icc()/5329909cv18d1-07f930c749e84b019d844431a7e5b2b9.jpg',
      details: 'Dries clothes by tumbling them in heated air, removing moisture after washing.',
    },
    {
      id: 5,
      name: 'Dishwasher',
      price: 300,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.tTPyuvT-Q6VXjmZO7hw7fQHaE7&pid=Api&P=0&h=180',
      details: 'Cleans dishes, glasses, and utensils automatically by spraying them with water and detergent.',
    },
    {
      id: 6,
      name: 'Oven',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Swq2V3smC5_fXzwRDhXGLgHaI4&pid=Api&P=0&h=180',
      details: 'Bakes, roasts, and cooks food by enclosing it in a heated chamber, often used for bread, cakes, and large meals.',
    },
    {
      id: 7,
      name: 'Stove/Cooktop',
      price: 358,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.t7dojgIbfYC27BXo5xsLCwHaE8&pid=Api&P=0&h=180',
      details: 'Cooks food by heating pots and pans on burners, either using gas, electricity, or induction.',
    },
    {
      id: 8,
      name: 'Toaster',
      price: 350,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.8sQ41l0ev3RKBZbeUuPZ7QHaG-&pid=Api&P=0&h=180',
      details: 'Toasts bread, bagels, and other similar items by exposing them to radiant heat.',
    },
    {
      id: 9,
      name: 'Blender',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.T905I0V_sezBsxtRDOjOtAHaJk&pid=Api&P=0&h=180',
      details: 'Mixes, purees, and blends ingredients to create smoothies, soups, sauces, and other liquid-based recipes.',
    },
    {
      id: 10,
      name: 'Coffee Maker',
      price: 350,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP._ESJajA4aUfV4XntqYYFUwHaEq&pid=Api&P=0&h=180',
      details: 'Brews coffee by heating water and passing it through ground coffee beans, producing a fresh cup of coffee.',
    },
    {
      id: 11,
      name: 'Air Conditioner',
      price: 350,
      imageUrl: 'https://i.pinimg.com/originals/88/ae/88/88ae88f9bd586820bba12b008fae0e32.jpg',
      details: 'Cools indoor spaces by removing heat and humidity, creating a comfortable environment during hot weather.',
    },
    {
      id: 12,
      name: 'Vacuum Cleaner',
      price: 350,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.eMprwFtheYg12Pwruv1KcQAAAA&pid=Api&P=0&h=180',
      details: 'Cleans floors and carpets by suctioning up dirt, dust, and debris.',
    },
    {
      id: 13,
      name: 'Electric Kettle',
      price: 350,
      imageUrl: 'https://m.media-amazon.com/images/I/41nRBbUfqhL._SL500_.jpg',
      details: 'Heats water quickly for making tea, coffee, or instant foods like oatmeal and noodles..',
    },
    {
      id: 14,
      name: 'Slow Cooker',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.0tOdxMOSWg_mrZoLeVh2ZgHaEK&pid=Api&P=0&h=180',
      details: 'Cooks food slowly at a low temperature over several hours, ideal for soups, stews, and braised dishes..',
    },
    {
      id: 15,
      name: 'Rice Cooker',
      price: 350,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.ShNMNMKNRAtD10A259qV5QHaGp&pid=Api&P=0&h=180',
      details: 'Cooks rice to perfection by automatically controlling the heat and timing; often includes settings for different types of rice.',
    },
    {
      id: 16,
      name: 'Iron',
      price: 350,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.AAzIaJkl_MLL2z3hUWoBPgHaGX&pid=Api&P=0&h=180',
      details: 'Removes wrinkles from clothes and fabrics by applying heat and steam, often used for shirts, pants, and linens.',
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

export default Appliances;
