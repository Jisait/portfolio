
import { GithubOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

function Home() {
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

        <Link href="/">
          <h1 className={styles.title}>Portefolio</h1>
        </Link>

        <Link href="/projets">
          <span className={styles.projets}>projets</span>
        </Link>

        <Link href="/contact">
          <span className={styles.contact}>contact</span>
        </Link>
      </main>
    </div>
  );
}

export default Home;
