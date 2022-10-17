import { useSelector, useDispatch } from 'react-redux';
import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import styles from './AppHeader.module.scss';
import { toggleNav } from '../../store/reducers/nav.reducer';
import setBodyOverflow from '../../helpers/setBodyOverflow';

const AppHeader = () => {
  const isOpened = useSelector(state => state.nav.isOpened);
  const dispatch = useDispatch();

  const handleOpenNav = () => {
    dispatch(toggleNav());
    setBodyOverflow('visible');
  };

  const handleCloseNav = () => {
    dispatch(toggleNav());
    setBodyOverflow('hidden');
  };

  const wrapperClasses = [styles['top-wrapper']];
  const headerClassses = [styles.header];

  if (isOpened) {
    wrapperClasses.push(styles.dark);
    headerClassses.push(styles.inNav);
  }

  return (
    <header className={headerClassses.join(' ')}>
      <div className="container">
        <div className={wrapperClasses.join(' ')}>
          <div className={styles.icon}>
            {isOpened ? (
              <CloseIcon onClick={handleOpenNav} />
            ) : (
              <HamburgerIcon onClick={handleCloseNav} />
            )}
          </div>
          <Link to="/">
            <h1>Personal Travel Blog</h1>
          </Link>
          {!isOpened ? (
            <div className={styles.right}>
              <div className={styles.icon}>
                <SearchIcon />
              </div>
              <div className={styles.divider}>|</div>
              <Link className={styles['profile-link']} to="/profile">
                profile
              </Link>
            </div>
          ) : (
            <div className={styles.icon}>
              <SearchIcon />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
