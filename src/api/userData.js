import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getUsers = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${uid}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const createUser = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getSingleUser = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/details/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteSingleUser = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${uid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// const updateUser = (uid) =>
//   new Promise((resolve, reject) => {
//     fetch(`${endpoint}/users/${uid}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // body: JSON.stringify(payload),
//     })
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch(reject);
//   });

export { getUsers, createUser, getSingleUser, deleteSingleUser };
