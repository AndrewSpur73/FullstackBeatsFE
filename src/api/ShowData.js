import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllShows = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/shows`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

export default getAllShows;
