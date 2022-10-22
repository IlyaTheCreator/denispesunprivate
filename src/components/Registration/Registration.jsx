import MyInput from '../UI/FormInputs/MyInput';
import styles from './Registration.module.scss';
import Modal from '../Modal/Modal';

const Registration = ({ isOpen, onClose, onLogin, onPassword }) => {
  const getLogin = event => {
    onLogin(event.target.value);
  };

  const getPassword = event => {
    onPassword(event.target.value);
  };

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
        <MyInput
          id="user_login"
          type="text"
          placeholder="Login"
          onChange={getLogin}
        />
        <MyInput
          id="user_password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={getPassword}
        />
        <MyInput
          id="user_repeat_password"
          type="password"
          name="repeat_password"
          placeholder="Repeat password"
          onChange={getPassword}
        />
      </form>
    </Modal>
  );
};

export default Registration;
