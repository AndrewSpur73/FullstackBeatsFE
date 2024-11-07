'use client';

import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth } from '../utils/context/authContext';
import { getSingleUser } from '../api/userData';
import ProfileCard from '../components/profileCard';
import HostCard from '../components/hostCard';
import WatchCard from '../components/watchCard';

function Home() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user?.uid) {
      getSingleUser(user.uid).then((data) => {
        setUserData(data);
      });
    }
  }, [user]);

  return (
    <Container fluid style={{ paddingTop: '20px' }}>
      <Row className="gx-3">
        {/* Left Side - Profile Card, takes up a smaller portion of the screen */}
        <Col xs={12} md={3} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          {userData ? <ProfileCard userData={userData} /> : <p>No user data available.</p>}
        </Col>

        {/* Centered Right Side - WatchCard and HostCard, takes up the rest of the space */}
        <Col xs={12} md={9} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WatchCard />
          <HostCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
