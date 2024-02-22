import styles from './FooterSettingsMenu.module.scss'

const FooterSettingsMenu = () => {
  return (
    <ul className={styles.settingsMenu}>
      <li className={styles.linkWrapper}>
        <a className={styles.link}>Privacy Notice</a>
      </li>
      <li className={styles.linkWrapper}>
        <span className={styles.separator}>|</span>
        <a className={styles.link}>Terms of Use</a>
      </li>
      <li className={styles.linkWrapper}>
        <span className={styles.separator}>|</span>
        <a className={styles.link}>Do Not Share My Personal Information</a>
      </li>
      <li className={styles.linkWrapper}>
        <span className={styles.separator}>|</span>
        <a className={styles.link}>CA Supply Chain Act</a>
      </li>
      <li className={styles.linkWrapper}>
        <span className={styles.separator}>|</span>
        <a className={styles.link}>Accessibility</a>
      </li>
      <li className={styles.linkWrapper}>
        <span className={styles.separator}>|</span>
        <a className={styles.link}>Cookie Preferences</a>
      </li>
    </ul>
  )
}

export default FooterSettingsMenu;