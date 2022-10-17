import { useEffect, useState } from 'react';
import { MOCK_LOADING_TIME_MS } from '../../constants/ui';
import Loader from '../Loader/Loader';

const MockPageWrapper = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setLoaded(true),
      MOCK_LOADING_TIME_MS,
    );

    return () => clearTimeout(timeoutId);
  }, []);

  return loaded ? children : <Loader />;
};

export default MockPageWrapper;
