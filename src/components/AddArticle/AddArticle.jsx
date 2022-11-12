import Modal from '../Modal/Modal';

import styles from './AddArticle.module.scss';

const AddArticle = ({ isOpen, onClose }) => {
  const handleSubmit = () => {
    console.log('bruh');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add an article"
      mainActionText="Submit"
      secondaryActionText="Cancel"
      mainAction={handleSubmit}
      size="fullscreen"
    >
      <h1>hello</h1>
    </Modal>
  );
};

export default AddArticle;
