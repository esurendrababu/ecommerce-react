import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useSaveForLater } from './SaveForLaterContext';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Cart.css';

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, getTotalCost } = useCart();
  const { saveForLater } = useSaveForLater();
  const [showAnimation, setShowAnimation] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleIncrease = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecrease = (itemId) => {
    decreaseQuantity(itemId);
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleSaveForLater = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      saveForLater(item);
      removeFromCart(itemId); // Optionally remove the item from the cart after saving for later
    }
  };

  const handleBuyNow = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      setShowConfirmation(true);
      clearCart(); // Clear the cart after showing the confirmation message
    }, 3000); // Show animation for 3 seconds
  };

  return (
    <div className="cart-container">
      <h1 id="shopping-cart-page">Shopping Cart</h1>
      <Row xs={1} md={2} className="g-4">
        {cartItems.length === 0 ? (
          <p id="cart-item-icon">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <Col key={item.id}>
              <Card className="cart-item-card">
                <Card.Img variant="top" className="cart-item-img" src={item.imageUrl} alt={item.name} />
                <Card.Body className="cart-item-body">
                  <Card.Title className="cart-item-title">{item.name}</Card.Title>
                  <Card.Text className="cart-item-text">
                    Price: ${item.price} | Quantity: {item.quantity}
                  </Card.Text>
                  <div className="cart-item-buttons">
                    <Button variant="outline-secondary" onClick={() => handleDecrease(item.id)}>-</Button>
                    <Button variant="outline-primary" onClick={() => handleIncrease(item.id)}>+</Button>
                    <Button variant="outline-danger" onClick={() => handleRemove(item.id)}>Remove</Button>
                    <Button variant="outline-info" onClick={() => handleSaveForLater(item.id)}>Save for later</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <h3 id="shopping-cart-page-cost">Total Cost: ${getTotalCost()}</h3>
      <Button variant="success" className="buy-now-btn glow-on-hover" onClick={handleBuyNow}>
        Buy Now
      </Button>
      {showAnimation && (
        <div className="animation-container">
          <div className="packing-animation">Your item is being ordered...</div>
        </div>
      )}
      {showConfirmation && (
        <div className="confirmation-message">
          Your item has been ordered! You will receive a message on your registered mobile number.
        </div>
      )}
    </div>
  );
}

export default Cart;
