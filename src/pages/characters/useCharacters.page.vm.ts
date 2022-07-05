import { useEffect, useState } from 'react';

import charactersStore from '../../shared/stores/characters.store';

export const useCharactersCardViewModel = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await charactersStore.setCharacters();
      setIsLoading(false);
    })();
  }, []);

  return { isLoading };
};
