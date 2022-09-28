import userStore from '../../store/userStore'
/**
 * @typedef {Object} User
 * Information and statistic about the user
 * @property {integer} userId The userId in database
 * @property {UserInfos} userInfos User's personal informations
 * @property {Session[]} sessions The 10 last session of the user
 * @property {Score[]} score The score of the user and a reference
 * @property {Performance[]} performance The performance of the user in each kind of category
 * @property {AvgSessions[]} avgSessions The average sessions for each day of the week
 * @property {Nutrition} nutrition The nutrition informations of the user
 */

/**
 * @class
 * @classdesc Call user information information from API to produce an object with all the datas formatted for the components's project
 */
class DataFormatter {
  /**
   * @param {number} userId Id of the user in the API
   */
  constructor(userId) {
    this.id = userId
    this.userInfos = {}
    this.userActivity = {}
    this.userAvgSession = {}
    this.userPerformance = {}
  }

  /**
   * Load all the datas from the API and keep them in the current instance
   * @async
   * @function
   */
  loadDatas = async () => {
    const store = userStore(this.id)
    const userInfos = await store.getUserInfos()
    this.userInfos = userInfos

    const userActivity = await store.getActivity()
    this.userActivity = userActivity

    const userAvgSession = await store.getAvgSession()
    this.userAvgSession = userAvgSession

    const userPerformance = await store.getPerformance()
    this.userPerformance = userPerformance
  }

  /**
   * Create an object with all the formatted datas about the user coming from the API
   * @function
   * @return {User}
   */
  getFormattedDatas = () => {
    const formattedDatas = {
      userId: this.id,
      userInfos: this.userInfos.userInfos,
      score: this.getFormattedScoreDatas(),
      nutrition: this.getFormattedNutrition(),
      sessions: this.getLastTenSessions(),
      avgSessions: this.getNameSessionDays(),
      performance: this.getFormattedPerformances(),
    }
    return formattedDatas
  }

  /**
   * Format nutrition information recieved from API
   * @function
   * @return {Nutrition} Nutritional informations
   */
  getFormattedNutrition = () => {
    return {
      calorieCount: this.formatNumber(this.userInfos.keyData.calorieCount),
      proteinCount: this.formatNumber(this.userInfos.keyData.proteinCount),
      carbohydrateCount: this.formatNumber(
        this.userInfos.keyData.carbohydrateCount
      ),
      lipidCount: this.formatNumber(this.userInfos.keyData.lipidCount),
    }
  }

  /**
   * Add a comma as thousand separator
   * @function
   * @param {number} num The number to format
   * @returns {string} The number as a string with the separator if needed
   */
  formatNumber = (num) => {
    const strNum = String(num)
    if (strNum.length > 3) {
      return strNum.slice(0, 1).concat(',', strNum.slice(1))
    } else {
      return strNum
    }
  }

  /**
   * Return an array with the 10 last sessions formatted object
   * @function
   * @returns {Session[]} The 10 last sessions array
   */
  getLastTenSessions = () => {
    let rep
    if (this.userActivity.length > 10) {
      rep = this.userActivity.slice(
        this.userActivity.length - 10,
        this.userActivity.length
      )
    } else {
      rep = this.userActivity
    }
    return rep
  }

  /**
   * Format and return average sessions datas recieved from API
   * @function
   * @returns {AvgSessions[]} The average session length for each day in an array
   */
  getNameSessionDays = () => {
    const weekDaysAbrv = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return this.userAvgSession.map((sess) => {
      return {
        day: weekDaysAbrv.at(sess.day - 1),
        sessionLength: sess.sessionLength,
      }
    })
  }

  /**
   *Format and return the user's score and a base reference (score value of 100%)
   * @function
   * @returns {Score[]} The user's score and the reference
   */
  getFormattedScoreDatas = () => {
    const score = this.userInfos.score || this.userInfos.todayScore
    return [
      { id: 2, todayScore: 100, opacity: 0 },
      { id: 1, todayScore: score * 100, fill: '#E60000' },
    ]
  }

  /**
   * Format and return user's performance array for each kind of discipline
   * @function
   * @returns {Performance[]} The performance associated with each kind of discipline written in french
   */
  getFormattedPerformances = () => {
    const rawPerf = this.userPerformance.data
    const kindPerf = this.userPerformance.kind
    const kindTranslate = {
      energy: 'Energie',
      cardio: 'Cardio',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    }

    return rawPerf.map((perf) => {
      return { data: perf.value, kind: kindTranslate[kindPerf[perf.kind]] }
    })
  }
}

export default DataFormatter

/**
 *  @typedef {Object} Nutrition
 * Nutrition informations about the user
 * @property {string} calorieCount Amount of calory
 * @property {string} proteinCount Amount of protein
 * @property {string} carbohydrateCount Amount of carbohydrate
 * @property {string} lipidCount Amount of lipid
 */

/**
 *  @typedef {Object} Session
 * Infomrmations about the last 10 sessions of the user
 * @property {string} day Date of the session
 * @property {number} kilogram Weight in kg at the date
 * @property {number} calories Amount of burned calories
 */

/**
 *  @typedef {Object} AvgSessions
 * Informations about the average sessions of the user organized by weekday
 * @property {string} day Week day (Monday => Sunday)
 * @property {number} sessionLength Average session length
 */

/**
 *  @typedef {Object} Score
 * Informations about the user's score and display option associated
 * @property {number} id An id used by the charts generator
 * @property {number(0-100)} todayScore The user's score
 * @property {number} [fill] The color that will be linked to the given score
 * @property {number} [opacity] The opacity that will be linked to the given score
 */

/**
 *  @typedef {Object} Performance
 * Informations about the user's performance
 * @property {number} data The performance for the given category
 * @property {string} kind The category
 */

/**
 *  @typedef {Object} UserInfos
 * Personal nformations about the user
 * @property {string} firstName The user's first name
 * @property {string} lastName The user's last name
 * @property {integer} age The user's age
 */
