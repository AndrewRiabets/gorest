import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const token = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KAY}`,
  },
};

export const getUsersData = async (pageNumber, genderType) => {
  let response;
  if (genderType !== "all") {
    response = await axios.get(
      `${BASE_URL}/users?page=${pageNumber}&gender=${genderType}`
    );
  } else {
    response = await axios.get(`${BASE_URL}/users?page=${pageNumber}`);
  }
  const { data } = response;
  return {
    users: data.data,
    pagination: data.meta.pagination,
  };
};

export const getUserDataById = async ({ userId }) => {
  const { data } = await axios.get(`${BASE_URL}users/${userId}`);
  return data.data;
};

export const patchUserData = async (userId, userData) => {
  const { status } = await axios.patch(
    `${BASE_URL}/users/${userId}`,
    userData,
    token
  );
  return status;
};
