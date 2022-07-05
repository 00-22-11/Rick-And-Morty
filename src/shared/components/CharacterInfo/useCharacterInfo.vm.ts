import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import charactersStore from '../../../shared/stores/characters.store';

export const useCharacterInfoViewModel = (): { isLoading: boolean } => {
  const { charId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        await charactersStore.setCharacterInfo(charId);
      })();
    } finally {
      setIsLoading(false);
    }
  }, [charId]);

  return { isLoading };
};
