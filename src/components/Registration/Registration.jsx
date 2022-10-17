import MyInput from '../UI/FormInputs/MyInput';
import MyButton from '../UI/FormButtons/MyButton';
import styles from './Registration.module.scss';

const Registration = () => {
    return (
        <div className={styles.container_form}>
            <div className={styles.container_auth}>
                <form>
                    <h1>Авторизация</h1>

                    <MyInput 
                        type="text"
                        placeholder="Логин"
                    />
                    <MyInput
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                    <MyInput
                        type="password"
                        name="repeate_password"
                        placeholder="Повторить пароль"
                    />  

                    <MyButton>
                        Подтвердить
                    </MyButton>
                </form>
            </div>
        </div>
    );
};

export default Registration;