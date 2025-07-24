import './App.css'
import Personaje from './components/Personajes/personaje'
import Footer from './components/Footer/footer.jsx'

function App() {
  

  return (
    <>
    <div className="principal">
      <h1>Marvel Characters</h1>
    </div>
    <div className="container">
      <Personaje />
      <Footer />
    </div>
    </>
  )
}

export default App
