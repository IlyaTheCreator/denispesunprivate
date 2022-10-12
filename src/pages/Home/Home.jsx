import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles['home-page']}>
      <h1>hello testing here</h1>
      <Link to="/about">about</Link>
    </div>
  );
};

export default Home;
