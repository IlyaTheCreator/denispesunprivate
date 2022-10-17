import styles from './MyInput.module.scss'

const MyInput = (props) => {
    return (
        <input className={styles.MyInp} {...props}/>
    );
};

export default MyInput;