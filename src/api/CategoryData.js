import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getShowCategories = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getBlahCategories = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getShowCategories, getBlahCategories };
