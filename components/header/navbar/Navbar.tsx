import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li><a href="/">menu</a></li>
        <li><a href="/">rewards</a></li>
        <li><a href="/">gift card</a></li>
      </ul>
    </nav>
  )

}
export default Navbar;