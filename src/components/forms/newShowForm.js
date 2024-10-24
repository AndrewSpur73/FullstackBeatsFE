// 'use client';

// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useRouter } from 'next/navigation';
// import { createNewShow, updateShow } from '../../api/ShowData';
// import { useAuth } from '../../utils/context/authContext';

// function NewShowForm() {
//   const { user, updateUser } = useAuth();

//   const [formData, setFormData] = useState({
//     uid: user.fbUser.uid,
//     image: '',
//     name: '',
//     airDate: '',
//     description: '',
//   });

//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (uid) {
//       updateShow(formInput).then(() => router.push(`/author/${obj.firebaseKey}`));
//     } else {
//       const payload = { ...formData, uid: user.uid };
//       createNewShow(formData).then(({ name }) => {
//         const patchPayload = { firebaseKey: name };
//         updateShow(patchPayload).then(() => {
//           router.push('/show');
//         });
//       });
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicImage">
//         <Form.Label>Show Image</Form.Label>
//         <Form.Control type="url" name="image" required placeholder="Enter an image URL" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicUserName">
//         <Form.Label>Show Name</Form.Label>
//         <Form.Control type="text" name="name" required placeholder="Enter Show Name" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Show Air Date</Form.Label>
//         <Form.Control type="date" name="airDate" required placeholder="Enter Show Air Date" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicAbout">
//         <Form.Label>Bio</Form.Label>
//         <Form.Control type="text" name="description" required placeholder="Enter a Bio" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
//       </Form.Group>
//       <Button variant="danger" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// NewShowForm.propTypes = {
//   user: PropTypes.shape({
//     // imageUrl: PropTypes.string.isRequired,
//     fbUser: PropTypes.shape({
//       uid: PropTypes.string.isRequired,
//       displayName: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// export default NewShowForm;
