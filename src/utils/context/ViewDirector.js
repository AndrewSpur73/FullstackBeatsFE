import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { useAuth } from './authContext';
import Loading from '../../components/Loading';
import Signin from '../../components/SignIn';
import RegisterForm from '../../components/forms/RegisterForm';

function ViewDirectorBasedOnUserAuthStatus({ component: Component, pageProps }) {
  const { user, userLoading, updateUser } = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    return (
      <>
        <Navbar /> {/* NavBar only visible if user is logged in and is in every view */}
        <div className="container">{'valid' in user ? <RegisterForm user={user} updateUser={updateUser} /> : <Component {...pageProps} />}</div>
      </>
    );
  }

  return <Signin />;
}

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
