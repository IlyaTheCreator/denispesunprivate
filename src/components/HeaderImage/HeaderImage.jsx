import styles from './HeaderImage.module.scss';

const HeaderImage = ({ url }) => {
  const divStyles = {
    backgroundImage: `url(${url})`,
  };

  return <div style={divStyles} className={styles['header-image']} />;
};

export default HeaderImage;
