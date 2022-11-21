import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getArticlesByUserIdFn } from '../../api/queryFunctions.js';
import MockPageWrapper from '../../components/MockPageWrapper/MockPageWrapper';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import AddArticle from '../../components/AddArticle/AddArticle';
import PageLoader from '../../components/PageLoader/PageLoader.jsx';
import { MOCK_ARTICLES_LIST } from '../../constants/mocks';
import { useSelector } from 'react-redux';
import styles from './Profile.module.scss';
import { useNavigate } from 'react-router-dom';
import { Button, useDisclosure } from '@chakra-ui/react';

const Profile = () => {
  const { username, email, token, id } = useSelector(store => store.user);

  const {
    isOpen: isAddArtcileOpen,
    onOpen: onAddArtcileOpen,
    onClose: onAddArtcileClose,
  } = useDisclosure();

  // const [mutatedArticles, setMutatedArticles] = useState([]);
  // const navigate = useNavigate();

  // const { isLoading } = useQuery(
  //   ['user-articles'],
  //   () => getArticlesByUserIdFn(token, id),
  //   {
  //     onSuccess: articles => {
  //       setMutatedArticles(
  //         articles.map(article => ({
  //           imageUrl: getRandomImageUrl(),
  //           ...article,
  //         })),
  //       );
  //     },
  //   },
  // );

  // useEffect(() => {
  //   navigate('/');
  //   alert('You need to sign in to access this page');
  // }, []);

  // if (isLoading) {
  //   return <PageLoader />;
  // }

  return (
    <MockPageWrapper>
      <AddArticle isOpen={isAddArtcileOpen} onClose={onAddArtcileClose} />
      <div className="page">
        <div className="container">
          <div className={styles.profile}>
            <div className={styles['flex-wrapper']}>
              <div className={styles['user-info']}>
                <h1>Username: {username}</h1>
                <p>Email: {email}</p>
              </div>
              <Button
                onClick={onAddArtcileOpen}
                sx={{ mb: 12 }}
                colorScheme="blue"
              >
                Add article
              </Button>
            </div>
            <h1 className={styles.header}>Your articles</h1>
            <div className={styles['user-articles']}>
              {MOCK_ARTICLES_LIST.slice(0, 7).map(item => (
                <ArticleItem key={item.title} data={item} isProfile />
              ))}
              {/* {mutatedArticles.map(item => (
                <ArticleItem key={item.title} data={item} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </MockPageWrapper>
  );
};

export default Profile;
