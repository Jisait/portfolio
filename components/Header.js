
import { GithubOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router'


function Home() {

  const router = useRouter()
  const styleProjet = {
    color: router.asPath === '/projets' ? '#f4d03f' : '',
    borderBottom: router.asPath === '/projets' ? "#f4d03f 1px solid" :''
  }

  const handleClickProjets = () => {
    router.push("/projets")}

    const styleContact = {
      color: router.asPath === '/contact' ? '#f4d03f' : '',
      borderBottom: router.asPath === '/contact' ? "#f4d03f 1px solid" :''
    }  

  const handleClickContact = () => {
      router.push("/contact")}

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.logosContainer}>
          <Link
            href="https://github.com/Jisait?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.github}
          >
            <GithubOutlined />
          </Link>
          <Link
            href="https://www.linkedin.com/in/cousin-jeancharles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined className={styles.linkedIn} />
          </Link>
        </div>

        <Link className={styles.titleLink} href="/">
          <h1 className={styles.title}>Portefolio</h1>
        </Link>
        <div  className={styles.navContainer} >
          <div onClick={handleClickProjets} style={styleProjet} className={styles.projets}>
            projets
          </div>
          <div onClick={handleClickContact} style={styleContact} className={styles.contact}>
            contact
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
