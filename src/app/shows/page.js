'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getAllShows } from '../../api/ShowData';
import ShowCards from '../../components/showCard';

export default function BrowseShows() {
  const [shows, setShows] = useState([]);

  const getshows = async () => {
    const data = await getAllShows();
    setShows(data || []);
    console.log(data);
  };

  useEffect(() => {
    getshows();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-2">
        <Link href="/shows/new" passHref>
          <Button type="button" size="lg" className="copy-btn" variant="outline-warning">
            CREATE NEW SHOW
          </Button>
        </Link>
        <Link href="/categories/new" passHref>
          <Button variant="primary" className="me-2">
            CREATE NEW CATEGORY
          </Button>
        </Link>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {shows.map((show) => (
          <ShowCards key={show.id} showObj={show} />
        ))}
      </div>
    </>
  );
}
