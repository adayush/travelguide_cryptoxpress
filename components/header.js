import styles from "./header.module.css"

import Image from 'next/image'
import menu from "../public/menu.svg"
import logo from "../public/logo.svg"
import guide from "../public/guide.png"

export default function Header() {
  return <header>
    <div className={styles.headermob}>
      <div>
        <Image
          src={menu}
          alt="menu"
          width={40}
          style={{textAlign: 'left'}}
        />
      </div>
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={110}
        />
      </div>
      <div>
        <Image
          src={guide}
          alt="Logo"
          width={55}
        />
      </div>
    </div>
    <div className={styles.header + ' container'}>
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={110}
        />
      </div>
      <div className={styles.menu}>
        <ul>
          <li>Plan Your Trip</li>
          <li>Book Tours</li>
          <li>Book Ferry</li>
          <li>Travel Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  </header>
}