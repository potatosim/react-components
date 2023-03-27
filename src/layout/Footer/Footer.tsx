import { TestId } from 'enum/TestId';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer data-testid={TestId.Footer} className={styles.footer}>
      <div className={styles.imageWrapper}>
        <a
          data-testid={TestId.FooterLink}
          href="https://github.com/potatosim"
          rel="noreferrer"
          target="_blank"
        >
          <img src={'https://cdn-icons-png.flaticon.com/512/1051/1051377.png'} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
