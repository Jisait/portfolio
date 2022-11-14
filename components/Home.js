import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Stack from '../components/Stack'
import About from '../components/About'
import NameAnimation from '../components/NameAnimation'
import {useState, useEffect, useRef} from 'react';


function Home() {


  var logosData_1 = [{img: "Javascript.png", name: "javascript"},
                {img: "React.png", name: "react"}] 
                
 
  return (
    <div>
   
      <div className={styles.container}>
        <div className={styles.NameAnimation}>
          <NameAnimation />
          <div className={styles.about}>
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}



export default Home;
