import axios from './axios'

export const signinFn = async (loginData) => {
  const res = await axios.post('/auth/signin', loginData)

  return res.data
}

export const signupFn = async (signupData) => {
  const res = await axios.post('/auth/signup', signupData)

  return res.data
}