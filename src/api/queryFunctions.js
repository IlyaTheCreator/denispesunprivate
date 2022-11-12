import axios from './axios';

export const signinFn = async (loginData) => {
  const res = await axios.post('/auth/signin', loginData);

  return res.data;
};

export const signupFn = async (signupData) => {
  const res = await axios.post('/auth/signup', signupData);

  return res.data;
};

export const getArticlesFn = async (token) => {
  if (!token) {
    return [];
  }

  const res = await axios.get('/post', { headers: { 'Authorization': `Bearer ${token}` } });

  return res.data;
};