import { Link } from 'react-router-dom';
import styles from './HeaderImage.module.scss';

const HeaderImage = ({ url, children }) => {
  const divStyles = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div style={divStyles} className={styles['header-image']}>
      {children}
    </div>
  );
};

export default HeaderImage;
