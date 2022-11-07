import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navigation'>
      <h1><Link to='/'>sandbox</Link></h1>
      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/about'>about</Link></li>
      </ul>
    </nav>
  )
}
