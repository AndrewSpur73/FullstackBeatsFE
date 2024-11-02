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
    fetch(`${endpoint}/shows/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// GET SINGLE SHOW CALL
const getSingleShow = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/shows/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// DELETE SINGLE SHOW CALL
const deleteSingleShow = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/shows/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// call used for host shows
const getUserHostedShows = (HostId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/shows/user/${HostId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// shows to attend
const showsToAttend = (userId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/shows/attend/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// unRSVP to shows
const removeReservation = (userId, showId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/shows/attend/${userId}/${showId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// RSVP to a show
const createReservation = (showId, userId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/shows/attend?showId=${showId}&userId=${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const toggleRSVP = (userId, showId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/shows/${userId}/reserved/${showId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json().catch(() => ({})))
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllShows, createNewShow, updateShow, getSingleShow, deleteSingleShow, getUserHostedShows, showsToAttend, removeReservation, createReservation, toggleRSVP };
