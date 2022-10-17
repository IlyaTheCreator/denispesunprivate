import { Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  useEffect(() => {
    document.querySelector('body').style.overflowY = 'hidden';

    return () =>
      (document.querySelector('body').style.overflowY = 'visible');
  }, []);

  return (
    <div className={styles.loader}>
      <Spinner size="xl" />
    </div>
  );
};

export default Loader;
