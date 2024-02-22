import Navbar from './navbar/Navbar';
import styles from './Header.module.scss'
import Image from 'next/image';
import { useState } from 'react';
import UserActions from './userActions/UserActions';

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleIsNavbarActive = () => {
    setIsNavbarActive(() => !isNavbarActive);
  }
  
  return (
    <section className={styles.header}>
      <Image
        className={styles.logo}
        src="/svg/logo.svg"
        alt="Starbucks Logo"
        width={51}
        height={51}
      />

      <div className={styles.hamburger} onClick={toggleIsNavbarActive}>
        <div className={`${styles.line} ${styles.topLine}`}></div>
        <div className={`${styles.line} ${styles.middleLine}`}></div>
        <div className={`${styles.line} ${styles.bottomLine}`}></div>
      </div>

      <div className={`${styles.navAndUserActionsContainer} ${isNavbarActive ? styles.slideRight : ''}`}> 
        <Navbar/>
        <UserActions/>
      </div>


    </section>
  )
}
export default Header;