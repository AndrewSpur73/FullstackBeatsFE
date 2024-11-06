'use client';

import React from 'react';
import PropTypes from 'prop-types';
import DetailsCard from '../../../../components/detailCard';

export default function ShowDetails({ params }) {
  const { id } = params; // Access the 'id' from the route parameters

  // Render the DetailsCard component, passing the `id` as a prop
  return (
    <div>
      <DetailsCard showId={id} />
    </div>
  );
}

// Define prop types for the component
ShowDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
