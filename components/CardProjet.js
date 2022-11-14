import styles from '../styles/CardProjet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import {useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';


function CardProjets(props) {

const [isVisible, setIsVisible] = useState(false);
const [isTest, setIsTest] = useState("rien");

function goUrlFront(){

}


let modalBackfront = <div></div>

  if (isVisible == true) {

modalBackfront = (
  <div className={styles.modal}>
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsVisible(false);
      }}
    >
      <Link 
             style={{textDecoration: "none"}}
             onClick={() => setIsVisible(false)}
             target="_blank"
             rel="noopener noreferrer"href={props.gitFront}>
       
          <div className={styles.frontend}>frontend</div>

      </Link>
      <Link href={props.gitBack} 
            style={{textDecoration: "none"}}
            onClick={() => setIsVisible(false)}
            target="_blank"
            rel="noopener noreferrer">
       
          <div onClick={() => setIsTest("back")} className={styles.backend}>
            backend
          </div>

      </Link>
      <div className={styles.triangle}></div>
    </OutsideClickHandler>
  </div>
);
  } else {
    modalBackfront = <div></div>
  }


console.log(isTest)
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.img} alt="logo" />
      <h1 className={styles.title}>{props.name}</h1>
      <p className={styles.desc}>{props.desc}</p>
      <div className={styles.codeContainer}>
            <FontAwesomeIcon  onClick={() => setIsVisible(true)} className={styles.code} icon={faCode} />
      </div>

      {modalBackfront}

    </div>
  );
}

export default CardProjets;
