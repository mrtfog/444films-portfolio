import './_app.module.scss'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/About Us/AboutUs'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import OurServices from './components/Our Services/OurServices'
import Studio from './components/Studio/Studio'

function App() {

  return (
    <>
      <Navbar />
      <main className="App">
        <Header />
        <AboutUs />
        <Portfolio />
        <OurServices />
        <Studio />
        <Contact />
      </main>
    </>
  )
}

export default App
