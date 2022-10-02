import axios from 'axios'
import Users from '../mock/user.mock.json'
import Activity from '../mock/activity.mock.json'
import AvgSessions from '../mock/avgSessions.mock.json'
import Performance from '../mock/performance.mock.json'
/**
 * @namespace userStore
 */
/**
 *  Functions of the userStore factory function to manage interaction with API for users
 * @typedef {Object} StoreFunctions
 * @property {function} getUserInfos() Get user personnal informations from database
 * @property {function} getActivity() Get user activity informations from database
 * @property {function} getAvgSession() Get user average sessions informations from database
 * @property {function} getPerformance() Get user performance informations from database
 */

/**
 * Factory function: manage interaction with API for users
 * @memberof userStore
 * @param {Integer} userId The user's id in the database
 * @returns {StoreFunctions} Functions to interact with API
 */
function userStore(userId) {
  const mockDatas = process.env.REACT_APP_DATAS === 'mock'
  const BASE_URL = 'http://localhost:3000/user/'

  /**
   * Get user personnal informations from database
   * @function userStore~getUserInfos
   * @async
   * @return {Object} Raw user personal informations
   */
  const getUserInfos = async () => {
    if (mockDatas) {
      const rep = Users.find((user) => {
        return user.id === userId
      })
      return rep
    } else {
      try {
        const datas = await axios.get(BASE_URL + `${userId}`)
        const userInfo = datas.data

        return userInfo.data
      } catch (err) {
        throw new Error(err)
      }
    }
  }

  /**
   * Get user activities informations from database
   * @function userStore~getActivity
   * @async
   * @return {Object} Raw user activities informations
   */
  const getActivity = async () => {
    if (mockDatas) {
      const rep = Activity.find((act) => {
        return act.userId === userId
      })
      return rep.sessions
    } else {
      try {
        const datas = await axios.get(BASE_URL + `${userId}/activity`)
        const activity = datas.data

        return activity.data.sessions
      } catch (err) {
        throw new Error(err)
      }
    }
  }

  /**
   * Get user average sessions informations from database
   * @function userStore~getAvgSession
   * @async
   * @return {Object} Raw user average sessions informations
   */
  const getAvgSession = async () => {
    if (mockDatas) {
      const rep = AvgSessions.find((sess) => {
        return sess.userId === userId
      })
      return rep.sessions
    } else {
      try {
        const datas = await axios.get(BASE_URL + `${userId}/average-sessions`)
        const avgSession = datas.data
        return avgSession.data.sessions
      } catch (err) {
        throw new Error(err)
      }
    }
  }

  /**
   * Get user performance informations from database
   * @function userStore~getPerformance
   * @async
   * @return {Object} Raw user performance informations
   */
  const getPerformance = async () => {
    if (mockDatas) {
      const rep = Performance.find((perf) => {
        return perf.userId === userId
      })
      return rep
    } else {
      try {
        const datas = await axios.get(BASE_URL + `${userId}/performance`)
        const performance = datas.data
        return performance.data
      } catch (err) {
        throw new Error(err)
      }
    }
  }

  return {
    getUserInfos,
    getActivity,
    getAvgSession,
    getPerformance,
  }
}

export default userStore
