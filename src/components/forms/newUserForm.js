// 'use client';

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import PropTypes from "prop-types";
// import { FloatingLabel , Form } from "react-bootstrap";
// import { Button } from "bootstrap";
// import { useAuth } from "../../utils/context/authContext";

// const initialState = {
//   username: '',
//   email: '',
//   about: '',
//   image: '',
// };

// function UserForm({ obj = initialState }) {
//   const [formInput, setFormInput] = useState(obj);
//   const router = useRouter();
//   const { user } = useAuth();

//   useEffect(() => {
//     if (obj.firebaseKey) setFormInput(obj);
//   }, [obj]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (obj.firebaseKey) {
//       updateUser(formInput).then(() => router.push(`/author/${obj.firebaseKey}`));
//     } else {
//       const payload = { ...formInput, uid: user.uid };
//       createUser(payload).then(({ name }) => {
//         const patchPayload = { firebaseKey: name };
//         updateUser(patchPayload).then(() => {
//           router.push('/');
//         });
//       });
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit} className="text-black">
//       <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Author</h2>

//       {/* FIRST NAME INPUT */}
//       <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
//         <Form.Control type="text" placeholder="Enter first name" name="first_name" value={formInput.username} onChange={handleChange} required />
//       </FloatingLabel>

//       {/* LAST NAME INPUT */}
//       <FloatingLabel controlId="floatingInput2" label="Last Name" className="mb-3">
//         <Form.Control type="text" placeholder="Enter last name" name="last_name" value={formInput.last_name} onChange={handleChange} required />
//       </FloatingLabel>

//       {/* EMAIL INPUT */}
//       <FloatingLabel controlId="floatingInput3" label="Email" className="mb-3">
//         <Form.Control type="email" placeholder="Enter email" name="email" value={formInput.email} onChange={handleChange} required />
//       </FloatingLabel>

//       {/* FAVORITE TOGGLE */}
//       <Form.Check
//         className="text-white mb-3"
//         type="switch"
//         id="favorite"
//         name="favorite"
//         label="Favorite Author?"
//         checked={formInput.favorite}
//         onChange={(e) => {
//           setFormInput((prevState) => ({
//             ...prevState,
//             favorite: e.target.checked,
//           }));
//         }}
//       />

//       {/* SUBMIT BUTTON */}
//       <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Author</Button>
//     </Form>
//   );
// }

// UserForm.propTypes = {
//   obj: PropTypes.shape({
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//     email: PropTypes.string,
//     favorite: PropTypes.bool,
//     firebaseKey: PropTypes.string,
//   }),
// };

// export default UserForm;
