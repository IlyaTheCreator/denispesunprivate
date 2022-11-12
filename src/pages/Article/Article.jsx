import HeaderImage from '../../components/HeaderImage/HeaderImage';
import getRandomImageUrl from '../../helpers/getRandomImageUrl';
import styles from './Article.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleByIdFn } from '../../api/queryFunctions.js';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PageLoader from '../../components/PageLoader/PageLoader.jsx';

const Article = () => {
  const token = useSelector(store => store.user.token);
  const { id } = useParams();
  const navigate = useNavigate()
  const [article, setArticle] = useState({});

  const { isLoading } = useQuery(['article'], () => getArticleByIdFn(token, id), {
    onSuccess: (article) => {
      setArticle({ ...article, imageUrl: getRandomImageUrl() });
    },
  });

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [])

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className='page'>
      <HeaderImage url={article.imageUrl} />
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles['content-text']}>{article.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
