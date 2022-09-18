import axios from 'axios'

const BASE_URL = 'http://localhost:3000/user/'

const getUserInfos = async (userId) => {
  const datas = await axios.get(BASE_URL + `${userId}`)
  const userInfo = datas.data

  return userInfo.data
}

const getActivity = async (userId) => {
  const datas = await axios.get(BASE_URL + `${userId}/activity`)
  const activity = datas.data

  return activity.data
}

const getAvgSession = async (userId) => {
  const datas = await axios.get(BASE_URL + `${userId}/average-sessions`)
  const avgSession = datas.data
  return avgSession.data
}

const getPerformance = async (userId) => {
  const datas = await axios.get(BASE_URL + `${userId}/performance`)
  const performance = datas.data
  return performance.data
}

const userStore = {
  getUserInfos,
  getActivity,
  getAvgSession,
  getPerformance,
}

export default userStore
