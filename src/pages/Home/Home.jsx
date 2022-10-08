import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../store/reducers/root.reducer';
import styles from './Home.module.scss';

const Home = () => {
  const name = useSelector(store => store.root.name);
  const dispatch = useDispatch();

  return (
    <div className={styles['home-page']}>
      <h1>Home, {name}</h1>
      <button onClick={() => dispatch(setName('ivan'))}>
        change name
      </button>
      <Link to="/about">about page</Link>
    </div>
  );
};

export default Home;
