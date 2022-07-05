import { FC } from 'react';

import { Skeleton } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { RMInterfaceApi } from '../../api/types';
import { CharacterCard } from '../../shared/components';
import charactersStore from '../../shared/stores/characters.store';
import styles from './characters.page.module.scss';
import { useCharactersCardViewModel } from './useCharacters.page.vm';

export const CharactersPage: FC = observer(() => {
  const { characters } = charactersStore;
  const { isLoading } = useCharactersCardViewModel();

  return (
    <div className={styles.root}>
      {characters
        ? characters.map(({ id, name, image }: RMInterfaceApi) =>
            isLoading ? (
              <Skeleton
                key={id}
                variant="rectangular"
                animation="pulse"
                width={345}
                height={200}
                style={{ borderRadius: '4px' }}
              />
            ) : (
              <CharacterCard key={id} id={id} name={name} image={image} />
            )
          )
        : null}
    </div>
  );
});
