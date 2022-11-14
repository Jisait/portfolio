import styles from '../styles/Stack.module.css';



function Stack(props) {
 
  return (
    <div  className={styles.stack} >
        <img className={styles.logo} src={props.img} alt="logo" />
    </div>
  );
}

export default Stack;
