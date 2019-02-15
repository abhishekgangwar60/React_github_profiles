import githubProfiles from "./../api/githubProfiles";

export const fetchUsers = async userName => {
  return await githubProfiles.get("search/users", {
    params: {
      q: userName
    }
  });
};
