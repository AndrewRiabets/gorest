import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const token = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KAY}`,
  },
};

export const getUsersData = async (pageNumber, gender) => {
  const { data } = await axios.get(`${BASE_URL}/users?page=${pageNumber}`);
  let users;
  if (gender !== "all") {
    users = data.data.filter((el) => {
      return el.gender === gender;
    });
  } else {
    users = data.data;
  }
  return {
    users,
    pagination: data.meta.pagination,
  };
};

export const patchUserData = async (userId, userData) => {
  const { status } = await axios.patch(
    `${BASE_URL}/users/${userId}`,
    userData,
    token
  );
  return status;
};
