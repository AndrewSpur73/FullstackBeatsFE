'use client';

import React, { useEffect, useState } from 'react';
import ShowCards from '../../components/showCard';
import getAllShows from '../../api/ShowData';

export default function BrowseShows() {
  const [shows, setShows] = useState([]);

  const getshows = async () => {
    const data = await getAllShows();
    setShows(data || []);
  };

  useEffect(() => {
    getshows();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {shows.map((show) => (
        <ShowCards key={show.id} showObj={show} />
      ))}
    </div>
  );
}

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
