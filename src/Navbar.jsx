// Dengan cara mengimport seperti dibawah ini untuk styling  mengisolasi dan tidak akan mempengaruhi komponen yang lain dengan className yang sama.
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div>
      <p className={styles.text}>css module</p>
    </div>
  );
}
export default Navbar;