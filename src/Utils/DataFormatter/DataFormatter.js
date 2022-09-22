import userStore from '../../store/userStore'
class DataFormatter {
  constructor(userId) {
    this.id = userId
    this.userInfos = {}
    this.userActivity = {}
    this.userAvgSession = {}
    this.userPerformance = {}
  }

  loadDatas = async () => {
    const userInfos = await userStore.getUserInfos(this.id)
    this.userInfos = userInfos

    const userActivity = await userStore.getActivity(this.id)
    this.userActivity = userActivity

    const userAvgSession = await userStore.getAvgSession(this.id)
    this.userAvgSession = userAvgSession

    const userPerformance = await userStore.getPerformance(this.id)
    this.userPerformance = userPerformance
  }

  getFormattedDatas = () => {
    const formattedDatas = {
      userId: this.id,
      userInfos: this.userInfos.userInfos,
      score: this.getFormatteScoreDatas(),
      nutrition: this.userInfos.keyData,
      sessions: this.getLastTenSessions(),
      avgSessions: this.getNameSessionDays(),
      performance: this.getFormattedPerformances(),
    }
    return formattedDatas
  }

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

  getNameSessionDays = () => {
    const weekDaysAbrv = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return this.userAvgSession.map((sess) => {
      return {
        day: weekDaysAbrv.at(sess.day - 1),
        sessionLength: sess.sessionLength,
      }
    })
  }

  getFormatteScoreDatas = () => {
    const score = this.userInfos.score || this.userInfos.todayScore
    return [
      { id: 2, todayScore: 100, opacity: 0 },
      { id: 1, todayScore: score * 100, fill: '#E60000' },
    ]
  }

  getFormattedPerformances = () => {
    const rawPerf = this.userPerformance.data
    const kindPerf = this.userPerformance.kind

    return rawPerf.map((perf) => {
      return { data: perf.value, kind: kindPerf[perf.kind] }
    })
  }
}

export default DataFormatter
