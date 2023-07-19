import logo from '../images/meme-logo-removebg.png'

export default function Navbar(){
  return(
    <nav className="navbar">
      <img src= {logo} className="nav-img"></img>
      <h2 className='heading'>Meme Generator</h2>
    </nav>
  )
}