import { Link } from 'react-router-dom';
import styles from './ArticleItem.module.scss';

const ArticleItem = ({ data: { imageUrl, title, description } }) => {
  return (
    <div className={styles.item}>
      <div className={styles['image-wrapper']}>
        <img src={imageUrl} />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link to="/article">
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default ArticleItem;
