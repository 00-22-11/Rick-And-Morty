import { FC } from 'react';

import { Skeleton } from '@mui/material';

import { RMInterfaceApi } from '../../api/types';
import { CharacterCard } from '../../shared/components';
import styles from './characters.page.module.scss';
import { useCharactersCardViewModel } from './useCharacters.page.vm';

export const CharactersPage: FC = () => {
  const { characters, isLoading } = useCharactersCardViewModel();

  return (
    <div className={styles.root}>
      {characters.map(({ id, name, image, origin }: RMInterfaceApi) =>
        isLoading ? (
          <Skeleton variant="rectangular" animation="pulse" width={345} height={200} style={{ borderRadius: '4px' }} />
        ) : (
          <CharacterCard key={id} id={id} name={name} image={image} origin={origin} />
        )
      )}
    </div>
  );
};
