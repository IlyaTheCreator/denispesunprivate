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

    if (login.length == 0) {
      console.log('Поле логин не было заполнено!');
      setLogin('');
    }

    if (login.length < 3) {
      console.log('Логин должен быть длинее 3 символов!');
      setLogin('');
    }

    if (login.includes(' ')) {
      console.log('Логин не должен содержать пробелы!');
      setLogin('');
    }

    if (password.length == 0) {
      console.log('Поле пароль не было заполнено!');
      setPassword('');
    }

    if (password.length < 6) {
      console.log('Пароль должен быть длинее 6 символов!');
      setPassword('');
    }

    if (password.includes(' ')) {
      console.log('Пароль не должен содержать пробелы!');
      setPassword('');
    }

    const stepSimbol = /[A-Z]/;
    if (!stepSimbol.test(password)) {
      console.log('У пароля должна быть минимум одна заглавная буква!');
      setPassword('');
    }

    if (passwordRepeat != password) {
      console.log('Пароли не совпадают!');
      setPasswordRepeat('');
    }

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
