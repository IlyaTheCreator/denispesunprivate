import { useSelector, useDispatch } from 'react-redux';
import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import styles from './AppHeader.module.scss';
import { toggleNav } from '../../store/reducers/nav.reducer';
import setBodyOverflow from '../../helpers/setBodyOverflow';
import Authorization from '../Authorization/Authorization';
import Registration from '../Registration/Registration';
import MyButton from '../UI/FormButtons/MyButton';
import { useDisclosure } from '@chakra-ui/react';
import { setUser } from '../../store/reducers/user.reducer.js';

const AppHeader = () => {
  const isMenuOpened = useSelector(state => state.nav.isOpened);
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();

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

  const handleLogout = () => {
    dispatch(setUser({}))
    localStorage.removeItem('user')
  }

  const wrapperClasses = [styles['top-wrapper']];
  const headerClasses = [styles.header];

  if (isMenuOpened) {
    wrapperClasses.push(styles.dark);
    headerClasses.push(styles.inNav);
  }

  return (
    <>
      <Authorization isOpen={isAuthOpen} onClose={onAuthClose} />
      <Registration isOpen={isRegisterOpen} onClose={onRegisterClose} />
      <header className={headerClasses.join(' ')}>
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
                {!user.id && (
                  <MyButton onClick={onAuthOpen}>Login</MyButton>
                )}
                {!user.id ? (
                  <MyButton onClick={onRegisterOpen}>Sign Up</MyButton>
                ) : (
                  <>
                    <Link className={styles['profile-link']} to="/profile">
                      profile
                    </Link>
                    <MyButton onClick={handleLogout}>Logout</MyButton>
                  </>
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
