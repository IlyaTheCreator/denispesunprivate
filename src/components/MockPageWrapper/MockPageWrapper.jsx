import { useEffect, useState } from 'react';
import { MOCK_LOADING_TIME_MS } from '../../constants/ui';
import PageLoader from '../PageLoader/PageLoader';

const MockPageWrapper = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setLoaded(true),
      MOCK_LOADING_TIME_MS,
    );

    return () => clearTimeout(timeoutId);
  }, []);

  return loaded ? children : <PageLoader />;
};

export default MockPageWrapper;
