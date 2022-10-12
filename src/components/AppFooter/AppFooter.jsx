import styles from './AppFooter.module.scss';

const AppFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.info}>
            <h1>Personal Travel</h1>
            <p>Copyrights © 2020. All Rights Reserved.</p>
          </div>
          <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#">About me</a>
            <a href="#">Categories</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
