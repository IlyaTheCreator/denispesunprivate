import { useState } from 'react';
import MyInput from '../UI/FormInputs/MyInput';
import styles from './Registration.module.scss';
import Modal from '../Modal/Modal';
import { useMutation } from '@tanstack/react-query';
import { signupFn } from '../../api/queryFunctions.js';
import { setUser } from '../../store/reducers/user.reducer.js';
import { useDispatch } from 'react-redux';

const Registration = ({ isOpen, onClose }) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const dispatch = useDispatch()

  const { mutate: signup, isError } = useMutation(
    async (signupData) => await signupFn(signupData),
    {
      onSuccess: (data) => {
        dispatch(setUser(data))

        setLogin('');
        setPassword('');
        setPasswordRepeat('');

        onClose();
      },
    },
  );

  const handleSubmit = () => {
    if (login.length == 0) {
      console.log('Поле логин не было заполнено!');
      setLogin('');

      return
    }

    if (login.length < 3) {
      console.log('Логин должен быть длинее 3 символов!');
      setLogin('');

      return
    }

    if (login.includes(' ')) {
      console.log('Логин не должен содержать пробелы!');
      setLogin('');

      return
    }

    if (password.length == 0) {
      console.log('Поле пароль не было заполнено!');
      setPassword('');

      return
    }

    if (password.length < 6) {
      console.log('Пароль должен быть длинее 6 символов!');
      setPassword('');

      return
    }

    if (password.includes(' ')) {
      console.log('Пароль не должен содержать пробелы!');
      setPassword('');

      return
    }

    const stepSimbol = /[A-Z]/;
    if (!stepSimbol.test(password)) {
      console.log('У пароля должна быть минимум одна заглавная буква!');
      setPassword('');
      setPasswordRepeat('');

      return
    }

    if (passwordRepeat != password) {
      console.log('Пароли не совпадают!');
      setPasswordRepeat('');

      return
    }

    signup({ username: login, email, password })
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
        {isError && <p className={styles.error}>Something went wrong. Please, try again</p>}
        <MyInput
          id="user_login"
          value={login}
          type="text"
          placeholder="Login"
          onChange={e => setLogin(e.target.value)}
        />
        <MyInput
          id="user_email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
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
