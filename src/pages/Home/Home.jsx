import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className="page">
      <div className={styles['home-page']}>
        <div className="container" style={{ height: '80vh' }}>
          <h1>hello testing here</h1>
          <Link to="/about">about</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
