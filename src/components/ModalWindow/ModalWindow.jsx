import styles from "./ModalWindow.module.scss"


//active - виден ли компонент или нет
//setActive - функция измнения состояния active

const ModalWindow = ({active, setActive}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                
            </div>  
        </div>
    );
};

export default ModalWindow;

