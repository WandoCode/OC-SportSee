import LateralNav from './Components/LateralNav/LateralNav'
import Header from './Components/Header/Header'
import userStore from './store/userStore'
import { useEffect, useState } from 'react'
import './app.css'

function App() {
  const [user, setUser] = useState({})

  const loadUserInfos = async () => {
    const userInfos = await userStore.getUserInfos(12)
    await userStore.getPerformance(12)
    setUser(userInfos)
  }

  useEffect(() => {
    loadUserInfos()
  }, [])

  //TODO: fetch username
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
        </div>
      </main>
    </div>
  )
}

export default App
