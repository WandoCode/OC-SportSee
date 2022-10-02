import { useEffect, useState } from 'react'

import Header from './Components/Header/Header'
import Charts from './Components/Charts/Charts'
import LateralNav from './Components/LateralNav/LateralNav'
import DataFormatter from './Utils/DataFormatter/DataFormatter'

/**
 * @namespace App
 */
/**
 * Generate the application and launch user's datas loading.
 * @function
 * @memberof App
 */
function App() {
  const userId = 12
  const [user, setUser] = useState()

  /**
   * Create a DataFormatter instance and get user's formatted datas trought it
   * @function App~loadUserInfos
   */
  const loadUserInfos = async () => {
    const datas = new DataFormatter(userId)
    await datas.loadDatas()

    const rep = datas.getFormattedDatas()
    setUser(rep)
  }

  useEffect(() => {
    loadUserInfos()
  }, [])

  return (
    <div className="App">
      <Header />
      <main className="main">
        <LateralNav />
        <div className="main-container">
          <h1>
            Bonjour <span className="red">{user?.userInfos?.firstName}</span>
          </h1>
          <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
          {user && <Charts user={user} />}
        </div>
      </main>
    </div>
  )
}

export default App
