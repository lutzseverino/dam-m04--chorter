import Image from "next/image";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  var darkModeEnabled = false; // TODO: Get this from the user's preferences
  var imageSrc = darkModeEnabled
    ? "/chorter-dark-full.svg"
    : "/chorter-light-full.svg";

  return (
    <nav className={styles.main}>
      <a href="#/">
        <Image
          src={imageSrc}
          alt="Chorter Light Full Logo"
          width={117}
          height={24}
          priority
        />
      </a>
      <div className={styles.nav}>
        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">About</a>
        </div>
        <div className={styles.links}>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
