import { useEffect, useRef } from 'react';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import MockPageWrapper from '../../components/MockPageWrapper/MockPageWrapper';
import { MOCK_LOADING_TIME_MS } from '../../constants/ui';
import getRandomImageUrl from '../../helpers/getRandomImageUrl';
import styles from './Article.module.scss';

const Article = ({ data: { title, content } }) => {
  const contentRef = useRef();

  const waitAlittleItIsAmock = () => {
    setTimeout(() => {
      contentRef.current.innerHTML = content;
    }, MOCK_LOADING_TIME_MS * 2);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = content;
    } else {
      waitAlittleItIsAmock();
    }
  }, []);

  return (
    <MockPageWrapper>
      <div className="page">
        <HeaderImage url={getRandomImageUrl()} />
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p ref={contentRef} className={styles['content-text']} />
          </div>
        </div>
      </div>
    </MockPageWrapper>
  );
};

export default Article;
