import MockPageWrapper from '../../components/MockPageWrapper/MockPageWrapper';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import { MOCK_ARTICLES_LIST } from '../../constants/mocks';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <MockPageWrapper>
      <div className="page">
        <div className="container">
          <div className={styles.profile}>
            <div className={styles['user-info']}>
              <h1>Username: Ivan Petrov</h1>
              <p>Date registered: 08.08.2003</p>
            </div>
            <h1 className={styles.header}>Your articles</h1>
            <div className={styles['user-articles']}>
              {MOCK_ARTICLES_LIST.slice(0, 7).map(item => (
                <ArticleItem key={item.title} data={item} isProfile />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockPageWrapper>
  );
};

export default Profile;
