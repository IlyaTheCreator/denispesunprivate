import HeaderImage from '../../components/HeaderImage/HeaderImage';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import { WELCOME_IMAGE_URL } from '../../constants/ui';
import { MOCK_ARTICLES_LIST } from '../../constants/mocks';

import styles from './Home.module.scss';
import MockPageWrapper from '../../components/MockPageWrapper/MockPageWrapper';

const Home = () => {
  return (
    <MockPageWrapper>
      <div className="page">
        <div className={styles['home-page']}>
          <HeaderImage url={WELCOME_IMAGE_URL} />
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
    </MockPageWrapper>
  );
};

export default Home;
