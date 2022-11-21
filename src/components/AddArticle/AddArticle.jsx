import Modal from '../Modal/Modal';
import MyInput from '../UI/FormInputs/MyInput';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import styles from './AddArticle.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../api/queryFunctions.js';
import { useQuery } from '@chakra-ui/react';

const AddArticle = ({ isOpen, onClose }) => {
  const { id } = useSelector(store => store.user);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const { mutate: createPost, isError } = useMutation(
    async postData => await createPost(postData),
    {
      onSuccess: () => {
        setTitle('');
        setText('');

        onClose();
      },
      onError: () => {
        console.log('IDI LESOM THIS IS TEMPORARY');
      },
    },
  );

  const handleSubmit = () => {
    console.log({ title, text, user_id: id });
    createPost({ title, text, user_id: id });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Article"
      mainActionText="Submit"
      secondaryActionText="Cancel"
      size="xl"
      mainAction={handleSubmit}
    >
      <form>
        {isError && (
          <p className={styles.error}>
            Something went wrong. Please, try again
          </p>
        )}
        <MyInput
          id="title"
          value={title}
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <MyInput
          id="text"
          value={text}
          name="text"
          placeholder="Text"
          onChange={e => setText(e.target.value)}
        />
      </form>
    </Modal>
  );
};

export default AddArticle;
