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
      <Link
        onClick={() => window.scrollTo({ top: 0, left: 0 })}
        to="/article"
      >
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default ArticleItem;
