import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import styles from './AppFooter.module.scss';

const AppFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.info}>
            <h1>Personal Travel</h1>
            <p>Copyrights © 2020. All Rights Reserved.</p>
          </div>
          <div className={styles.links}>
            {ROUTES.map(route => (
              <Link to={route.path} key={route.name}>
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
