import AppFooter from '../../components/AppFooter/AppFooter';
import AppHeader from '../../components/AppHeader/AppHeader';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles['home-page']}>
      <AppHeader />
      <AppFooter />
    </div>
  );
};

export default Home;
