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
      <Row>
        {/* Left Side - Profile Card */}
        <Col xs={12} md={6}>
          {userData ? <ProfileCard userData={userData} /> : <p>No user data available.</p>}
        </Col>

        {/* Right Side - WatchCard and HostCard */}
        <Col xs={12} md={6}>
          {/* WatchCard */}
          <WatchCard />

          {/* HostCard */}
          <HostCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
// test
