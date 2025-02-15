export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAIL = "USER_DETAILS_FAIL";

export const USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_PROFILE_REQUEST";
export const USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS";
export const USER_UPDATE_PROFILE_FAIL = "USER_UPDATE_PROFILE_FAIL";

export const USER_PROFILE_UPDATE_REQUEST = "USER_PROFILE_UPDATE_REQUEST";
export const USER_PROFILE_UPDATE_SUCCESS = "USER_PROFILE_UPDATE_SUCCESS";
export const USER_PROFILE_UPDATE_FAIL = "USER_PROFILE_UPDATE_FAIL";

export const getUserDetails = () => ({
  type: USER_DETAILS_REQUEST,
});

export const updateUserProfile = (user) => ({
  type: USER_UPDATE_PROFILE_REQUEST,
  payload: user,
});
export const loginUser = (email, password) => ({
  type: USER_LOGIN_REQUEST,
  payload: { email, password },
});

export const logout = () => ({
  type: USER_LOGOUT,
});

export const registerUser = (name, email, password) => ({
  type: USER_REGISTER_REQUEST,
  payload: { name, email, password },
});
