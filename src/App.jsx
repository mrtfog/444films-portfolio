import './_app.module.scss'
import { AboutUs, Contact, Header, Navbar, Portfolio } from './components/index'

function App() {

  return (
    <>
      <Navbar />
      <main className="App">
        <Header />
        <section>
          <AboutUs />
          <Portfolio />
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
