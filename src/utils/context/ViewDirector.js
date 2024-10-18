import PropTypes from 'prop-types';
import { useAuth } from './authContext';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import RegisterForm from '../../components/forms/RegisterForm';
import Signin from '../../components/SignIn';

function ViewDirectorBasedOnUserAuthStatus({ children }) {
  const { user, userLoading, updateUser } = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    return (
      <>
        <NavBar /> {/* NavBar only visible if user is logged in and is in every view */}
        <RegisterForm updateUser={updateUser} />
        {children}
      </>
    );
  }

  return <Signin />;
}

export default ViewDirectorBasedOnUserAuthStatus;

// ViewDirectorBasedOnUserAuthStatus.propTypes = {
//   component: PropTypes.func.isRequired,
//   pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
// };
ViewDirectorBasedOnUserAuthStatus.propTypes = {
  children: PropTypes.node.isRequired,
};
