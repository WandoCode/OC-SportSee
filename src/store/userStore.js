import axios from 'axios'
import Users from '../mock/user.mock.json'
import Activity from '../mock/activity.mock.json'
import AvgSessions from '../mock/avgSessions.mock.json'
import Performance from '../mock/performance.mock.json'
const mockDatas = process.env.REACT_APP_.DATAS === 'mock'

const BASE_URL = 'http://localhost:3000/user/'

const getUserInfos = async (userId) => {
  if (mockDatas) {
    const rep = Users.find((user) => {
      return user.id === userId
    })
    return rep
  } else {
    const datas = await axios.get(BASE_URL + `${userId}`)
    const userInfo = datas.data

    return userInfo.data
  }
}

const getActivity = async (userId) => {
  if (mockDatas) {
    const rep = Activity.find((act) => {
      return act.userId === userId
    })
    return rep.sessions
  } else {
    const datas = await axios.get(BASE_URL + `${userId}/activity`)
    const activity = datas.data

    return activity.data.sessions
  }
}

const getAvgSession = async (userId) => {
  if (mockDatas) {
    const rep = AvgSessions.find((sess) => {
      return sess.userId === userId
    })
    return rep.sessions
  } else {
    const datas = await axios.get(BASE_URL + `${userId}/average-sessions`)
    const avgSession = datas.data
    return avgSession.data.sessions
  }
}

const getPerformance = async (userId) => {
  if (mockDatas) {
    console.log(Performance)
    const rep = Performance.find((perf) => {
      return perf.userId === userId
    })
    return rep
  } else {
    const datas = await axios.get(BASE_URL + `${userId}/performance`)
    const performance = datas.data
    return performance.data
  }
}

const userStore = {
  getUserInfos,
  getActivity,
  getAvgSession,
  getPerformance,
}

export default userStore
