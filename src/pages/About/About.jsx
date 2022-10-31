import { useDisclosure } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import Registration from '../../components/Registration/Registration';
import MockPageWrapper from '../../components/MockPageWrapper/MockPageWrapper';
import Modal from '../../components/Modal/Modal';
import styles from './About.module.scss';

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalExample = (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sample Modal"
      mainActionText="Submit"
      secondaryActionText="Idi lesom"
      size="xl"
    >
      <h4>We are doing the business</h4>
      <p>
        lorem ipsum valera ya tut a ti gde lorem ipsum valera ya tut a ti
        gde lorem ipsum valera ya tut a ti gde
      </p>
    </Modal>
  );

  return (
    <MockPageWrapper>
      {modalExample}
      <Registration/>
      <div className="page">
        <div className={styles['about-page']}>
          <div className="container">
            <h1>About</h1>
            <Link to="/">home page</Link>
            <button onClick={onOpen}>Open Modal</button>
          </div>
        </div>
      </div>
    </MockPageWrapper>
  );
};

export default About;
