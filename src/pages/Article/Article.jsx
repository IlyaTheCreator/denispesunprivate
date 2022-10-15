import { useEffect, useRef } from 'react';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import getRandomImageUrl from '../../helpers/getRandomImageUrl';
import styles from './Article.module.scss';

const Article = ({ data: { title, content } }) => {
  const contentRef = useRef();

  useEffect(() => {
    contentRef.current.innerHTML = content;
  }, []);

  return (
    <>
      <HeaderImage url={getRandomImageUrl()} />
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p ref={contentRef} className={styles['content-text']} />
        </div>
      </div>
    </>
  );
};

export default Article;
