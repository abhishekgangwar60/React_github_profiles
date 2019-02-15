import githubProfiles from "./../api/githubProfiles";

export const fetchProfile = async userName => {
  return await githubProfiles.get(`users/${userName}`);
};
