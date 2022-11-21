import axios from './axios';

export const signinFn = async loginData => {
  const res = await axios.post('/auth/signin', loginData);

  return res.data;
};

export const signupFn = async signupData => {
  const res = await axios.post('/auth/signup', signupData);

  return res.data;
};

export const getArticlesFn = async token => {
  if (!token) {
    return [];
  }

  const res = await axios.get('/post', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
};

export const getArticlesByUserIdFn = async (token, userId) => {
  if (!token) {
    return [];
  }

  const res = await axios.get(`/post/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
};

export const getArticleByIdFn = async (token, id) => {
  if (!token) {
    return {};
  }

  const res = await axios.get(`/post/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
};

export const createPost = async postData => {
  const res = await axios.post('/post', postData);

  return res.data;
};
