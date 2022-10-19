import { Link } from 'react-router-dom';
import styles from './ArticleItem.module.scss';

const ArticleItem = ({
  data: { imageUrl, title, description },
  isProfile,
  onButtonClick,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles['image-wrapper']}>
        <img src={imageUrl} />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {!isProfile ? (
        <Link
          onClick={() => window.scrollTo({ top: 0, left: 0 })}
          to="/article"
        >
          <button>Read more</button>
        </Link>
      ) : (
        <button onClick={onButtonClick ? onButtonClick : () => {}}>
          Edit
        </button>
      )}
    </div>
  );
};

export default ArticleItem;
