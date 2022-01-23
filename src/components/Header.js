import logo from '../logo.svg';

function Header() {
  return (
    <header className="header header__page">
    <img src={logo} alt="Место логотип" className="header__logo"/>
  </header>
  )
}

export default Header