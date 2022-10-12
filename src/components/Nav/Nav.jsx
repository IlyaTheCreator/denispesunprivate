import { useDispatch, useSelector } from 'react-redux';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { toggleNav } from '../../store/reducers/nav.reducer';
import styles from './Nav.module.scss';

const Nav = () => {
  const isOpened = useSelector(state => state.nav.isOpened);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const navStyles = [styles.nav];

  if (!isOpened) {
    navStyles.push(styles.hidden);
  }

  return (
    <div className={navStyles.join(' ')}>
      <div className="container">
        <div className={styles.wrapper}>
          <div
            className={styles.links}
            onClick={() => dispatch(toggleNav())}
          >
            {ROUTES.map(route => {
              const isCurrent = matchPath(route, pathname);

              return (
                <Link
                  className={isCurrent ? styles.currentLink : ''}
                  to={route.path}
                  key={route.name}
                >
                  {route.name}
                </Link>
              );
            })}
          </div>
          <div className={styles.email}>
            <h3>Newsletter</h3>
            <p>
              Subscribe to receive exclusive content updates, travel &
              photo tips!
            </p>
            <form>
              <div className={styles['input-block']}>
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder="example@" />
              </div>
              <button
                onClick={() => alert('Subscribed')}
                className={styles['action-btn']}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
