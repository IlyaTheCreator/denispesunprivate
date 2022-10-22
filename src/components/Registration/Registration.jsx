import { useState } from 'react';
import MyInput from '../UI/FormInputs/MyInput';
import styles from './Registration.module.scss';
import Modal from '../Modal/Modal';

const Registration = ({ isOpen, onClose }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleSubmit = () => {
    console.log({ login, password, passwordRepeat });
    onClose();

    setLogin('');
    setPassword('');
    setPasswordRepeat('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Registration"
      mainActionText="Submit"
      secondaryActionText="Cancel"
      mainAction={handleSubmit}
      size="xl"
    >
      <form>
        <MyInput
          id="user_login"
          value={login}
          type="text"
          placeholder="Login"
          onChange={e => setLogin(e.target.value)}
        />
        <MyInput
          id="user_password"
          value={password}
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <MyInput
          id="user_repeat_password"
          value={passwordRepeat}
          type="password"
          name="repeat_password"
          placeholder="Repeat password"
          onChange={e => setPasswordRepeat(e.target.value)}
        />
      </form>
    </Modal>
  );
};

export default Registration;
