import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';

import styles from './AppHeader.module.scss';

const AppHeader = () => {
  return (
    <header>
      <div className="container">
        <div className={styles['top-wrapper']}>
          <div className={styles.icon}>
            <HamburgerIcon />
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
