import { header } from '../portfolio'
import Navbar from './Navbar'
import './css/Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center' id="home">
      <h3>
        {homepage ? (
          <a href="#home" className='link'>
            {title}
          </a>
        ) : (
          title
        )}

      </h3>
      <Navbar />
    </header>
  )
}

export default Header