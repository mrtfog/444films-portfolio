import './_app.module.scss'
import { AboutUs, Contact, Header, Navbar, Portfolio } from './components/index'
import React, {useContext} from 'react'
import { ThemeContext } from './contexts/theme';


function App() {


  const [{theme, isDark}] = useContext(ThemeContext);


  return (
    <div style={{backgroundColor: theme.backgroundColor, color: theme.color, transition: ".4s linear"}}>
      <Navbar />
      <main className="App">
        <Header />
        <section>
          <AboutUs />
          <Portfolio />
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
