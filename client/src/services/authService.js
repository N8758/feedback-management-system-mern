import api from "./api";

export const registerAdmin = (
  data
) => {
  return api.post(
    "/auth/register",
    data
  );
};

export const loginAdmin = (
  data
) => {
  return api.post(
    "/auth/login",
    data
  );
};

export const logoutAdmin = () => {
  localStorage.removeItem("token");
};