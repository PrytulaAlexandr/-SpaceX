import { Link } from 'react-router-dom';
import styles from './UnderDevelop.module.css';

const UnderDevelop = () => {
  return (
    <>
      <div className={styles.UnderDevelopContainer}>
        <h1 className={styles.UnderDevelopTitle}>Under development</h1>
        <Link to="/" className={styles.UnderDevelopLink}>
           Go to Main page
        </Link>
      </div>
    </>
  );
};

export default UnderDevelop;
