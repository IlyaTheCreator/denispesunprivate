import { useSelector, useDispatch } from 'react-redux';
import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import styles from './AppHeader.module.scss';
import { toggleNav } from '../../store/reducers/nav.reducer';
import setBodyOverflow from '../../helpers/setBodyOverflow';
import Authorization from '../Authorization/Authorization';
import MyButton from '../UI/FormButtons/MyButton';
import { useDisclosure } from '@chakra-ui/react';

const IS_AUTHORIZED = false;

const AppHeader = () => {
  const isMenuOpened = useSelector(state => state.nav.isOpened);
  const dispatch = useDispatch();

  const {
    isOpen: isAuthOpen,
    onOpen: onAuthOpen,
    onClose: onAuthClose,
  } = useDisclosure();

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

  if (isMenuOpened) {
    wrapperClasses.push(styles.dark);
    headerClassses.push(styles.inNav);
  }

  return (
    <>
      <Authorization isOpen={isAuthOpen} onClose={onAuthClose} />
      <header className={headerClassses.join(' ')}>
        <div className="container">
          <div className={wrapperClasses.join(' ')}>
            <div className={styles.icon}>
              {isMenuOpened ? (
                <CloseIcon onClick={handleOpenNav} />
              ) : (
                <HamburgerIcon onClick={handleCloseNav} />
              )}
            </div>
            <Link to="/">
              <h1>Personal Travel Blog</h1>
            </Link>
            {!isMenuOpened ? (
              <div className={styles.right}>
                <div className={styles.icon}>
                  <SearchIcon />
                </div>
                <div className={styles.divider}>|</div>
                {!IS_AUTHORIZED ? (
                  <MyButton onClick={onAuthOpen}>Login</MyButton>
                ) : (
                  <Link className={styles['profile-link']} to="/profile">
                    profile
                  </Link>
                )}
              </div>
            ) : (
              <div className={styles.icon}>
                <SearchIcon />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
