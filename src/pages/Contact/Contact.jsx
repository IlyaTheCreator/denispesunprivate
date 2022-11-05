import styles from './Contact.module.scss';
import MyInput from '../../components/UI/FormInputs/MyInput';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import { MOCK_ARTICLES_LIST } from '../../constants/mocks';
import { WELCOME_IMAGE_URL } from '../../constants/ui';

import MockPageWrapper from '../../components/MockPageWrapper/MockPageWrapper';

const Contact = () => {
  return (
    <MockPageWrapper>
      <div className="page">
        <div className="container">
          <div className={styles.title}>
            <h1>Contact</h1>
          </div>
          <div className={styles.user_info}>
            <div className={styles.image_block}>
              <HeaderImage url={WELCOME_IMAGE_URL} />
              <h3>
                Donec accumsan purus nec ligula volutpat posuere. Integer
                lectus lorem, mollis eget varius condimentum, vehicula eu
                arcu. Duis viverra orci vel pretium eleifend. Phasellus sit
                amet pellentesque risus. Nulla ut ex sit amet nisl
                malesuada semper.
              </h3>
            </div>

            <div className={styles.contacts}>
              <div className={styles.baseInfo}>
                <MyInput placeholder="Your Name" />
                <MyInput placeholder="Your Email" />
              </div>

              <div className={styles.specialInfo}>
                <MyInput placeholder="Subject" />
                <MyInput placeholder="Your messeage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockPageWrapper>
  );
};

export default Contact;