
import styles from '../styles/ChampsContact.module.css'


function ChampsContact() {

  return (
    <div className={styles.main}>
      <input spellcheck="false" type="text" name="" required className={styles.nomInput} />
      <div className={styles.nom}>Nom</div>
      <input spellcheck="false" type="text" name="" required className={styles.emailInput} />
      <div  className={styles.email}>Email</div>
      <textarea spellcheck="false" type="text" name="" required className={styles.messageInput} />
      <div className={styles.message}>Message</div>
     
  
      <div className={styles.titre}>Contactez-moi !</div>
    </div>
  );
}

export default ChampsContact;
