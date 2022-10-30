import Modal from '../Modal/Modal';
import MyInput from '../UI/FormInputs/MyInput';
import { useState } from 'react';

const Authorization = ({ isOpen, onClose }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log({ login, password });

    if (login.length == 0 || password.length == 0) {
      console.log('Поле является обязательным!');
    }

    if (password.length < 6) {
      console.log('Минимальная длина - 6 символов');
    }

    setLogin('');
    setPassword('');

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleSubmit}
      title="Authorization"
      mainActionText="Submit"
      secondaryActionText="Cancel"
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
      </form>
    </Modal>
  );
};

export default Authorization;
