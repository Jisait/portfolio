import styles from '../styles/NameAnimation.module.css';
import Stack from '../components/Stack'
import {useState, useEffect, useRef} from 'react';


function NameAnimation() {

  var logosData_1 = [{img: "Javascript.png", name: "javascript"},
                {img: "React.png", name: "react"}] 

  var logos1 = logosData_1.map((data, i) => {
    return <Stack img={data.img}/>})  

    
    
return (
  <div className={styles.container}>
    <div className={styles.box1}>
      <div className={styles.blockJS}></div>
      <div className={styles.nomContainer}>
        <h1 className={styles.nom}>Jean-Charles COUSIN</h1>
      </div>
    </div>
    <div className={styles.box2}>
      <div className={styles.blockReact}></div>
      <div className={styles.jobContainer}>
        <h1 className={styles.developpeur}>Développeur FullStack</h1>
      </div>
    </div>
    <div className={styles.stack1}>{logos1}</div>
  </div>
);
}



export default NameAnimation;
