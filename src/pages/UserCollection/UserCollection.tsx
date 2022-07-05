import { FC } from 'react';

import { observer } from 'mobx-react-lite';

import { RMInterfaceApi } from '../../api/types';
import { CharacterCard } from '../../shared/components';
import charactersStore from '../../shared/stores/characters.store';
import styles from './UserCollection.module.scss';

export const UserCollection: FC = observer(() => {
  const { userFavorites } = charactersStore;

  return (
    <div className={styles.root}>
      {userFavorites.map((item: RMInterfaceApi) => (
        <CharacterCard key={item.id} id={item.id} name={item.name} image={item.image} cardInFavorites />
      ))}
    </div>
  );
});
