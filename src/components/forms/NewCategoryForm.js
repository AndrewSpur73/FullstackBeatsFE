'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/navigation';
import { createCategory } from '../../api/CategoryData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  categoryId: 0,
  name: '',
};

function NewCategoryForm() {
  const [formData, setFormData] = useState({ ...initialState });
  const { user } = useAuth();

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, categoryId: user.id };
    createCategory(payload).then(() => router.push('/shows'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container fluid className="d-flex vh-100 justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4} className="fixed-width">
          <Form onSubmit={handleSubmit} style={{ color: 'white' }}>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" name="name" required placeholder="Enter Category Name" onChange={handleChange} />
            </Form.Group>

            <Button type="submit" size="lg" className="copy-btn" variant="outline-warning">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

NewCategoryForm.propTypes = {
  categoryObj: PropTypes.shape({
    categoryId: PropTypes.number,
  }),
};

export default NewCategoryForm;
