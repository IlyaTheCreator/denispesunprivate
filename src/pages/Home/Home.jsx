import HeaderImage from '../../components/HeaderImage/HeaderImage';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import { WELCOME_IMAGE_URL } from '../../constants/ui';
import { MOCK_ARTICLES_LIST } from '../../constants/mocks';

import styles from './Home.module.scss';
import HeaderBlock from '../../components/HeaderBlock/HeaderBlock';

const Home = () => {
  return (
    <div className="page">
      <div className={styles['home-page']}>
        <HeaderImage url={WELCOME_IMAGE_URL}>
          <HeaderBlock />
        </HeaderImage>
        <div className="container">
          <h1 className={styles['page-header']}>Articles</h1>
          <div className={styles.articles}>
            {MOCK_ARTICLES_LIST.map(item => (
              <ArticleItem key={item.title} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
