import MyInput from '../UI/FormInputs/MyInput';
import styles from './Registration.module.scss';
import Modal from '../Modal/Modal';

const Registration = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Registration"
      mainActionText="Submit"
      secondaryActionText="Cancel"
      size="xl"
    >
      <form>
        <MyInput type="text" placeholder="Login" />
        <MyInput type="password" name="password" placeholder="Password" />
        <MyInput
          type="password"
          name="repeat_password"
          placeholder="Repeat password"
        />
      </form>
    </Modal>
  );
};

export default Registration;
