// Home Page (in our case profile page)

'use client';

import React, { useEffect, useState } from 'react';
import ShowCards from '../../components/ShowCards';
import getAllShows from '../../api/ShowData';

export default function BrowseShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getAllShows().then(setShows);
    console.warn(shows);
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {shows.map((show) => (
        <ShowCards key={show.id} showObj={show} />
      ))}
    </div>
  );
}
