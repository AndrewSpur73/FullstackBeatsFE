'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/navigation';
import { createCategory } from '../../api/CategoryData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  hostId: 0,
  image: '',
  name: '',
  airDate: '',
  rsvps: 0,
  description: '',
  categoryId: 0,
};

function NewCategoryForm() {
  const [formData, setFormData] = useState({ ...initialState });
  const { user } = useAuth();
  // const categoryObj = initialState;

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, hostId: user.id };
    createCategory(payload).then(() => router.push('/categories'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Show Image</Form.Label>
        <Form.Control type="url" name="image" required placeholder="Enter an image URL" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Show Name</Form.Label>
        <Form.Control type="text" name="name" required placeholder="Enter Show Name" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Show Air Date</Form.Label>
        <Form.Control type="date" name="airDate" required placeholder="Enter Show Air Date" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAbout">
        <Form.Label>Show Description</Form.Label>
        <Form.Control type="text" name="description" required placeholder="Enter Show Description" onChange={handleChange} />
      </Form.Group>

      <Button type="submit" size="lg" className="copy-btn" variant="outline-warning">
        Submit
      </Button>
    </Form>
  );
}

NewCategoryForm.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default NewCategoryForm;
