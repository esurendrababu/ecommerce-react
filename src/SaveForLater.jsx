import React from 'react';
import { useSaveForLater } from './SaveForLaterContext';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './SaveForLater.css'; // Optional: Add CSS for styling if needed

function SaveForLater() {
  const { savedItems } = useSaveForLater();

  return (
    <div className="save-for-later-container">
      <h1>Saved for Later</h1>
      <Row xs={1} md={2} className="g-4">
        {savedItems.length === 0 ? (
          <p>You have no items saved for later.</p>
        ) : (
          savedItems.map((item) => (
            <Col key={item.id}>
              <Card className="saved-item-card">
                <Card.Img variant="top" className="saved-item-img" src={item.imageUrl} alt={item.name} />
                <Card.Body className="saved-item-body">
                  <Card.Title className="saved-item-title">{item.name}</Card.Title>
                  <Card.Text className="saved-item-text">
                    Price: ${item.price}
                  </Card.Text>
                  {/* Optional: Add a button to move the item back to the cart */}
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

export default SaveForLater;
