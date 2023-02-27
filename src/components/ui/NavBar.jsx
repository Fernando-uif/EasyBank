import navBar from '../../sass/layout/navBar.module.scss';
import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/icon-hamburger.svg';

export const NavBar = () => {
  return (
    <nav className={navBar.nav}>
        <section>
            <img src={logo} alt='logo.svg' />
        </section>
        <div className={navBar['nav__menu']}>
            <img src={menuIcon} alt='icon' />
        </div>
    </nav>
  )
}
