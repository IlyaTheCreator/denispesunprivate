import MockPageWrapper from '../../components/MockPageWrapper/MockPageWrapper';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <MockPageWrapper>
      <div className="page">
        <div className="container">
          <div className={styles.profile}>Profile</div>
        </div>
      </div>
    </MockPageWrapper>
  );
};

export default Profile;
