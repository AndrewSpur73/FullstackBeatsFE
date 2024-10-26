import PropTypes from 'prop-types';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function ProfileCard({ userData }) {
  return (
    <Container style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Card
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '400px',
          maxHeight: '800',
          textAlign: 'center',
          backgroundColor: 'rgb(247, 157, 17)',
          border: '2px solid rgb(251, 71, 154)',
        }}
      >
        <Card.Body>
          <div className="d-flex justify-content-center">
            <Card.Img src={userData.image} alt={userData.name} roundedCircle style={{ width: '220px', height: '220px', objectFit: 'cover', marginBottom: '15px' }} />
          </div>
          <Card.Title>@{userData.userName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{userData.email}</Card.Subtitle>
          <Card.Text>{userData.about}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

ProfileCard.propTypes = {
  userData: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    userName: PropTypes.string,
    about: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;
