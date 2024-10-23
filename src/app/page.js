'use client';

import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth } from '../utils/context/authContext';
import { getSingleUser } from '../api/userData';
import ProfileCard from '../components/profileCard';

function Home() {
  const { user } = useAuth(); // Get the current authenticated user
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user?.uid) {
      getSingleUser(user.uid) // Fetch user data using the user's UID
        .then((data) => {
          setUserData(data); // Set the user data fetched from API
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [user]);

  return (
    <Container fluid style={{ paddingTop: '20px' }}>
      <Row>
        {/* Left Side - Profile Card */}
        <Col xs={12} md={6}>
          {userData ? <ProfileCard userData={userData} /> : <p>No user data available.</p>}
        </Col>

        {/* Right Side - Two Large Cards */}
        <Col xs={12} md={6}>
          {/* Card 1: Shows to Watch */}
          <Card style={{ marginBottom: '20px', minHeight: '200px' }}>
            <Card.Body>
              <Card.Title>Shows to Watch</Card.Title>
              <Card.Text>A list of shows you are interested in watching.</Card.Text>
            </Card.Body>
          </Card>

          {/* Card 2: Host */}
          <Card style={{ minHeight: '200px' }}>
            <Card.Body>
              <Card.Title>Host</Card.Title>
              <Card.Text>Details about hosting your own content or events.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
