import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        background: 'rgb(40, 23, 65)',
        height: '100vh',
        margin: 0,
      }}
    >
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          padding: '30px',
          maxWidth: '400px',
          width: '100%', // Ensure the inner content stays centered
        }}
      >
        <Image src="/images/image-removebg-preview (4).png" alt="Logo" style={{ maxWidth: '500px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }} />
        <Button type="button" size="lg" className="copy-btn" onClick={signIn} variant="outline-warning">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Signin;
