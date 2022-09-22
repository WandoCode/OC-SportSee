import LateralNav from './Components/LateralNav/LateralNav'
import Header from './Components/Header/Header'
import userStore from './store/userStore'
import { useEffect, useState } from 'react'

import Charts from './Components/Charts/Charts'
import DataFormatter from './Utils/DataFormatter/DataFormatter'

function App() {
  const userId = 12
  const [user, setUser] = useState()

  const loadUserInfos = async () => {
    const datas = new DataFormatter(userId)
    await datas.loadDatas()

    const rep = datas.getFormattedDatas()
    setUser(rep)
    console.log(rep)
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
          {user && <Charts user={user} />}
        </div>
      </main>
    </div>
  )
}

export default App
//TODO: (mentor) -> Structure des fichiers correcte?
//TODO: (mentor) -> Fichier de style avec les composants?
//TODO: (mentor) -> Proptype?
//TODO: (mentor) -> Modelisation des données: il faut valider les données reçues? ou juste composer un nouvel objet adapté à notre app avec les objets reçus?
