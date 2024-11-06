import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import styles from '../styles/globals.css';
import { useAuth } from '../utils/context/authContext';
import { createReservation, toggleRSVP, getSingleShow } from '../api/ShowData';

function DetailsCard({ showId }) {
  const { user } = useAuth();
  const [showObj, setShowObj] = useState(null);
  const [selectRsvp, setSelectRsvp] = useState(false);

  useEffect(() => {
    // Fetch show data by ID
    getSingleShow(showId).then(setShowObj).catch(console.error);
  }, [showId]);

  const RSVP = () => {
    createReservation(showId, user.id);
    setSelectRsvp(true);
  };

  useEffect(() => {
    if (user && showObj) {
      toggleRSVP(user.id, showObj.id).then(setSelectRsvp);
    }
  }, [user, showObj]);

  if (!showObj) return <p>Loading...</p>;

  return (
    <div className={styles.detailsContainer}>
      <div className={`${styles.card} ${styles.detailsCard}`}>
        <div className={styles.centerContainer} style={{ justifyContent: 'center', alignContent: 'center', display: 'flex', borderRadius: '8px' }}>
          <img src={showObj.image} alt={showObj.name} style={{ width: '700px', height: '600px', objectFit: 'contain', borderRadius: '8px' }} />
        </div>
        <div className="text-center">
          <h2 className={styles.title}>{showObj.name}</h2>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <strong>Air Date:</strong> {showObj.airDateFormatted}
            </div>
            <div className={styles.infoItem}>
              <strong>Description:</strong> {showObj.description}
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            {selectRsvp ? (
              <span className={styles.rsvpStatus}>Spot Reserved</span>
            ) : (
              <Button variant="outline-light" onClick={RSVP}>
                RSVP
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  showId: PropTypes.string.isRequired,
};

export default DetailsCard;
