import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function UserHostedShows() {
  return (
    <Container style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '100%', maxWidth: '600px', backgroundColor: 'rgb(247, 157, 17)', border: '2px solid rgb(251, 71, 154)' }}>
        <Card.Body>
          <Card.Title>Shows To Host</Card.Title>
          <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>Coming Soon!</p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserHostedShows;
