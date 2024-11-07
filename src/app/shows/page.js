'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getAllShows } from '../../api/ShowData';
import ShowCards from '../../components/showCard';

export default function BrowseShows() {
  const [shows, setShows] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const getshows = async () => {
    const data = await getAllShows();
    setShows(data || []);
  };

  function handleChange(e) {
    setSearchItem(e.target.value);
  }

  const searchResults = shows.filter((show) => JSON.stringify(show).toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()));

  useEffect(() => {
    getshows();
  }, []);

  return (
    <>
      <div className="search-bar-container">
        <input style={{ width: '600px', display: 'block', margin: '0 auto', borderRadius: '7px', marginTop: '15px' }} type="search" placeholder="Search for shows" onChange={handleChange} className="search-input" />
      </div>
      <div className="d-flex justify-content-center mt-2">
        <Link href="/shows/new" passHref>
          <Button type="button" size="lg" className="copy-btn" variant="outline-warning">
            CREATE NEW SHOW
          </Button>
        </Link>
        <Link href="/categories/new" passHref>
          <Button type="button" size="lg" className="copy-btn" variant="outline-warning">
            CREATE NEW CATEGORY
          </Button>
        </Link>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {searchResults.map((show) => (
          <ShowCards key={show.id} showObj={show} onUpdate={getshows} />
        ))}
      </div>
    </>
  );
}
