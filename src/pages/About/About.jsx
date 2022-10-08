import { Link } from 'react-router-dom';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles['about-page']}>
      <h1>About</h1>
      <Link to="/">home page</Link>
    </div>
  );
};

export default About;
