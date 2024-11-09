'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/navigation';
import { createNewShow, updateShow } from '../../api/ShowData';
import { getShowCategories } from '../../api/CategoryData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  hostId: 0,
  image: '',
  name: '',
  airDateFormatted: '',
  rsvps: 0,
  description: '',
  categoryId: 0,
};

function NewShowForm({ newShowObj }) {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ ...initialState });
  const { user } = useAuth();

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = { ...formData, hostId: user.id };
    if (newShowObj) {
      updateShow(formData).then(() => router.push(`/shows/`));
    } else {
      const payload = { ...formData, hostId: user.id };
      createNewShow(payload).then(() => router.push('/shows'));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    getShowCategories().then(setCategories);
    if (newShowObj) setFormData({ ...newShowObj });
  }, [newShowObj]);

  return (
    <Container fluid className="d-flex vh-100 justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4} className="fixed-width">
          <Form onSubmit={handleSubmit} style={{ color: 'white' }}>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Show Image</Form.Label>
              <Form.Control type="url" name="image" value={formData.image || ''} required placeholder="Enter an image URL" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label style={{ color: 'white' }}>Show Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name || ''} required placeholder="Enter Show Name" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Show Air Date</Form.Label>
              <Form.Control type="date" name="airDate" value={formData.airDate || ''} required placeholder="Enter Show Air Date" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAbout">
              <Form.Label>Show Description</Form.Label>
              <Form.Control type="text" name="description" value={formData.description || ''} required placeholder="Enter Show Description" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAbout">
              <Form.Label>Show Category</Form.Label>
              <Form.Select type="number" name="categoryId" value={formData.categoryId || ''} required placeholder="Select Show Category" onChange={handleChange}>
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
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

NewShowForm.propTypes = {
  newShowObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    airDateFormatted: PropTypes.string,
    categories: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }),
};

export default NewShowForm;
