import { Link } from 'react-router-dom';
import styles from './HeaderImage.module.scss';

const HeaderImage = ({ url }) => {
  const divStyles = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div style={divStyles} className={styles['header-image']}>
      <div className="container">
        <div className={styles.container_content}>
          <div className={styles.contents}>
            <div className={styles.header_contents}>
              {/* здеся будут кнопки */}
            </div>
            <div className={styles.body_contents}>
              <h4>Travels</h4>
              <h1>When Is The Best Time of Year To Visit Japan?</h1>
              <span>
                The good news for travelers is that there is no single best time of year to travel to Japan...
              </span>
              <Link to="/article">
                <button>Read more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
