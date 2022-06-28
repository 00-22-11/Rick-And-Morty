export const getCharactersInfoApi = async (baseUrl: string) => {
  const data = await fetch(baseUrl);

  return await data.json();
};
