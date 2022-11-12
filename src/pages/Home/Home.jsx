import HeaderImage from '../../components/HeaderImage/HeaderImage';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import { WELCOME_IMAGE_URL } from '../../constants/ui';
import { MOCK_ARTICLES_LIST } from '../../constants/mocks';

import styles from './Home.module.scss';
import MockPageWrapper from '../../components/MockPageWrapper/MockPageWrapper';
import HeaderBlock from '../../components/HeaderBlock/HeaderBlock';
import { useQuery } from '@tanstack/react-query';
import { getArticlesFn } from '../../api/queryFunctions.js';
import { useSelector } from 'react-redux';
import getRandomImageUrl from '../../helpers/getRandomImageUrl.js';
import { useState } from 'react';

const Home = () => {
  const token = useSelector(store => store.user.token);
  const [mutatedArticles, setMutatedArticles] = useState([]);

  const {
    isLoading,
  } = useQuery(['articles'], () => getArticlesFn(token), {
    onSuccess: (articles) => {
      setMutatedArticles(articles.map(article => ({ imageUrl: getRandomImageUrl(), ...article })));
    },
  });

  return (
    <MockPageWrapper>
      <div className='page'>
        <div className={styles['home-page']}>
          <HeaderImage url={WELCOME_IMAGE_URL}>
            <HeaderBlock />
          </HeaderImage>
          <div className='container'>
            <h1 className={styles['page-header']}>Articles</h1>
            <div className={styles.articles}>
              {mutatedArticles.map(item => (
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
