const BASE_URL = 'https://api.github.com';

export const fetchRepos = async () => {
  try {
    const data = await fetch(`${BASE_URL}/users/mrLora/repos`);
    return data.json();
  } catch (e) {
    throw Error(`NO REPOS. Msg: ${e}`);
  }
};
