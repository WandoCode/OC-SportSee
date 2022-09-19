import LateralNav from './Components/LateralNav/LateralNav'
import Header from './Components/Header/Header'
import userStore from './store/userStore'
import { useEffect, useState } from 'react'

import './app.css'
import Histogram from './Components/Histogram/Histogram'

function App() {
  const userId = 12
  const [user, setUser] = useState()

  const loadUserInfos = async () => {
    const rep = await userStore.getUserInfos(userId)
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
          <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
          <Histogram userId={userId} />
        </div>
      </main>
    </div>
  )
}

export default App
