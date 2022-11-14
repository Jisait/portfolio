import styles from '../styles/About.module.css';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
import {useState, useEffect, useRef} from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function About() {


/* animation logo scroll */

  const slideInLeft = (elem, start, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x:70,
      },
      {
        opacity: 100,
        x: 0,
      
        scrollTrigger: {
          trigger: elem,
          start: start,
          end: "bottom center"
        }
      }
    )
  }


const slideInRight = (elem, start, duration) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      x: -200,
    },
    {
      opacity: 100,
      x: 0,
    
      scrollTrigger: {
        trigger: elem,
        start: start,
        end: "bottom center"
      }
    }
  )
}

useEffect(()=> {
  slideInLeft("#logo1",70)
},[])

useEffect(()=> {
  slideInLeft("#logo2",80)
},[])

useEffect(()=> {
  slideInLeft("#logo3", 90)
},[])

useEffect(()=> {
  slideInLeft("#logo4", 100)
},[])

useEffect(()=> {
  slideInLeft("#logo5", 110)
},[])

useEffect(()=> {
  slideInLeft("#logo6", 120)
},[])


/* animation resume scroll */


useEffect(()=> {
  slideInRight("#resume",120)
},[])


  return (
<div  className={styles.main}>
  <div className={styles.resumeContainer} id="resume">
  Convaincu par la dimension créative du métier<br/>de développeur,
ainsi que par son rôle déterminant pour mieux répondre aux futurs enjeux de société, j’ai décidé de suivre une formation<br/>de développeur web fullstack pour compléter<br/>mon savoir-faire.
  </div>
  
  <div className={styles.logoContainer} >
    <img className={styles.logo} id="logo1" src="NodeJS.png" alt="logo" />
    <img className={styles.logo} id="logo2" src="Redux.png" alt="logo" />
    <img className={styles.logo} id="logo3" src="NextJS.png" alt="logo" />
    <img className={styles.logo} id="logo4" src="Git.png" alt="logo" />
    <img className={styles.logo} id="logo5" src="MongoDB.png" alt="logo" />
    <img className={styles.logo} id="logo6" src="HTMLCSS.png" alt="logo" />
  </div>
</div>
  );
}

export default About;
