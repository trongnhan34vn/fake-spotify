import instance from ".."

export const SIGNIN = async (user) => {
  let response = await instance.post("/api/signin", user);
  return response;
}

export const SIGNUP = async (user) => {
  let response = await instance.post("/api/register", user);
  return response;
}