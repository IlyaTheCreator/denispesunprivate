import { useSelector, useDispatch } from 'react-redux';
import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';

import styles from './AppHeader.module.scss';
import { toggleNav } from '../../store/reducers/nav.reducer';

const AppHeader = () => {
  const isOpened = useSelector(state => state.nav.isOpened);
  const dispatch = useDispatch();

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
              <CloseIcon onClick={() => dispatch(toggleNav())} />
            ) : (
              <HamburgerIcon onClick={() => dispatch(toggleNav())} />
            )}
          </div>
          <h1>Personal Travel Blog</h1>
          <div className={styles.icon}>
            <SearchIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
