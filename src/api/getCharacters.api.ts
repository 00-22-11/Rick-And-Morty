export const getCharactersApi = async (baseUrl: string) => {
  const data = await fetch(baseUrl);
  const { results } = await data.json();

  return results;
};
