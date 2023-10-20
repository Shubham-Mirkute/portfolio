import { useContext } from 'react'
import { ThemeContext } from './theme'
import Header from './components/Header'
import Skills from './components/Skills'
import ScrollTop from './components/ScrollTop'
import Footer from './components/Footer'
// import Contact from './components/Contact'
import About from './components/About'
import Card from './components/Card'
import './App.css'

function App() {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About/>
        <Card/>
        <Skills />
        {/* <Contact /> */}
      </main>

      <ScrollTop />
      <Footer />
    </div>
  )
}

export default App
