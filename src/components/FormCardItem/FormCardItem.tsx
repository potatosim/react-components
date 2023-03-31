import { TestId } from 'enum/TestId';
import { FC } from 'react';
import { IFormCard } from 'types/IFormCard';
import styles from './FormCardItem.module.scss';

const FormCardItem: FC<IFormCard> = ({ birthday, image, name, radio, selected }) => {
  return (
    <div data-testid={TestId.FormCardItem} className={styles.cardWrapper}>
      <h2 data-testid={TestId.FormCardName}>{name}</h2>
      <p>{birthday}</p>
      <p data-testid={TestId.FormCardSex}>{radio}</p>
      <div className={styles.imageWrapper}>
        <img src={image} />
      </div>
      <p data-testid={TestId.FormCardCountry}>{selected}</p>
      <p>Posted on {`${new Date().toLocaleDateString()}`}</p>
    </div>
  );
};

export default FormCardItem;
