import { FC, useState, useEffect } from 'react';

import { Button } from '@mui/material';
import cx from 'classnames';
import { useParams } from 'react-router-dom';

import { getCharactersInfoApi } from '../../../api';
import styles from './CharacterInfo.module.scss';

export const CharacterInfo: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [characterInfo, setCharacterInfo] = useState<any | []>([]);
  const { charId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getCharactersInfoApi(`https://rickandmortyapi.com/api/character/${charId}`);
      setCharacterInfo(data);
    })();
  }, [charId]);

  if (!characterInfo) {
    return null;
  }

  const { id, name, image, gender, species, status } = characterInfo;

  return (
    <div className={styles.container}>
      <div className={cx(styles.root, gender === 'Male' ? styles.colorBlue : styles.colorPink)}>
        <div>
          <img src={image} alt={`char-${id}`} className={styles.charImage} />
        </div>
        <div>
          Name: {name} <br />
          Gender: {gender} <br />
          Species: {species} <br />
          Status: {status} <br />
          <Button variant="outlined" color={gender === 'Male' ? 'primary' : 'error'}>
            Add to my collection
          </Button>
        </div>
      </div>
    </div>
  );
};
