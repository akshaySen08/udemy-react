import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authSlice';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.auth.isAuthenticated)

  const logouthandler = () => {
    dispatch(authActions.logout())
  }

  const loginHandler = () => {
    dispatch(authActions.login())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {authenticated && <button onClick={logouthandler}>Logout</button>}
            {!authenticated && <button onClick={loginHandler}>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
