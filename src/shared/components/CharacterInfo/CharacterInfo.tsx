import { FC } from 'react';

import { Button } from '@mui/material';
import cx from 'classnames';
import { observer } from 'mobx-react-lite';

import charactersStore from '../../../shared/stores/characters.store';
import styles from './CharacterInfo.module.scss';
import { useCharacterInfoViewModel } from './useCharacterInfo.vm';

export const CharacterInfo: FC = observer(() => {
  const { isLoading } = useCharacterInfoViewModel();
  const { characterInfo, addFavorites } = charactersStore;

  if (!characterInfo) {
    return null;
  }

  const { id, name, image, gender, species, status } = characterInfo;

  const handleClick = (charId: number) => {
    addFavorites(charId);
  };

  return !isLoading ? (
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
          <Button variant="outlined" color={gender === 'Male' ? 'primary' : 'error'} onClick={() => handleClick(id)}>
            Add to favorites
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.loadingText}>Loading, please wait...</div>
  );
});
