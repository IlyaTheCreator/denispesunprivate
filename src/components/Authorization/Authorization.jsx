import Modal from '../Modal/Modal';
import MyInput from '../UI/FormInputs/MyInput';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { signinFn } from '../../api/queryFunctions.js';

import styles from './Authorization.module.scss';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/user.reducer.js';

const Authorization = ({ isOpen, onClose }) => {
  const dispatch = useDispatch()

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: signin, isError } = useMutation(
    async (loginData) => await signinFn(loginData),
    {
      onSuccess: (data) => {
        dispatch(setUser(data))
        localStorage.setItem('user', JSON.stringify(data))

        setLogin('');
        setPassword('');

        onClose();
      },
    },
  );

  const handleSubmit = () => {
    if (login.length == 0 || password.length == 0) {
      console.log('Поле является обязательным!');
      return;
    }

    if (password.length < 6) {
      console.log('Минимальная длина - 6 символов');
      return;
    }

    signin({ username: login, password })
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Authorization'
      mainActionText='Submit'
      secondaryActionText='Cancel'
      size='xl'
      mainAction={handleSubmit}
    >
      <form>
        {isError && <p className={styles.error}>Something went wrong. Please, try again</p>}
        <MyInput
          id='user_login'
          value={login}
          type='text'
          placeholder='Login'
          onChange={e => setLogin(e.target.value)}
        />
        <MyInput
          id='user_password'
          value={password}
          type='password'
          name='password'
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
      </form>
    </Modal>
  );
};

export default Authorization;
