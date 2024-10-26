'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleShow } from '../../../../api/ShowData';
import NewShowForm from '../../../../components/forms/newShowForm';

export default function EditShows({ params }) {
  const [editShow, setEditShow] = useState({});
  const { id } = params;

  useEffect(() => {
    getSingleShow(id).then(setEditShow);
  }, [id]);

  return (
    <div>
      <NewShowForm newShowObj={editShow} />
    </div>
  );
}

EditShows.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
