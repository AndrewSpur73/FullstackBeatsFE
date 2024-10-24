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
      .then((data) => resolve(data))
      .catch(reject);
  });

// const getAvailableShows = () => {
//   fetch(`${endpoint}/shows`)
//   .then((response) => response.json())
//   .then((data) => {
//     data.shows
//   });
// }

export default getAllShows;
