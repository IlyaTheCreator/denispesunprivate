import { Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import setBodyOverflow from '../../helpers/setBodyOverflow';
import styles from './PageLoader.module.scss';

const PageLoader = () => {
  useEffect(() => {
    setBodyOverflow('hidden');

    return () => setBodyOverflow('visible');
  }, []);

  return (
    <div className={styles.loader}>
      <Spinner size="xl" />
    </div>
  );
};

export default PageLoader;
