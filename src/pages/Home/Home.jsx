import AppHeader from '../../components/AppHeader/AppHeader';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles['home-page']}>
      <AppHeader />
    </div>
  );
};

export default Home;
