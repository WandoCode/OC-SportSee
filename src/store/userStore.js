import axios from 'axios'

const BASE_URL = 'http://localhost:3000/user/'

const getUserInfos = async (userId) => {
  const datas = await axios.get(BASE_URL + `${userId}`)
  const userInfo = datas.data

  return userInfo.data
}

const userStore = {
  getUserInfos,
}

export default userStore
