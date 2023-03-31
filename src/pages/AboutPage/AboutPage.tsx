import { TestId } from 'enum/TestId';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <p data-testid={TestId.TextAbout} className={styles.aboutText}>
        Here is something about us
      </p>
      <div data-testid={TestId.ImageAbout} className={styles.imageWrapper}>
        <img src="http://pm1.narvii.com/6928/ba31013fadd775c5f696f4d4fcbb31746514bdf9r1-386-431v2_00.jpg" />
      </div>
    </div>
  );
};

export default AboutPage;
