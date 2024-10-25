import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET ALL SHOWS CALL
const getAllShows = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/shows`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// CREATE SHOW CALL
const createNewShow = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/shows`, {
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

// UPDATE SHOW CALL
const updateShow = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/books/${payload.id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllShows, createNewShow, updateShow };
