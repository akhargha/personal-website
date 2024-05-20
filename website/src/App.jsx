import profile from './PRIDE29.jpg'
import './App.css'

function App() {

  return (
    <div className="app">
      <div className="profile">
        <img className="profile-image" src={profile} alt="Profile" />
        <h2 className="profile-name">Anupam Khargharia</h2>
      </div>
    </div>
  )
}

export default App
