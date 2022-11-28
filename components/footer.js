import styles from "./footer.module.css"
import { Divider, Image } from 'antd'

export default function Footer() {
  return <footer className={`container ${styles.footer}`}>
      <div className={styles.grid}>
        <div>
          <Image src="/logo.svg" width={150} preview={false} />
          <p>We're a small crew of locals and Andaman-lovers helping you make the most of your trip to the Andamans.</p>
          <p>You can build your holiday from the ground-up, exactly how you like. We've personally verified each experience, so you know that they're tried, tested and true!</p>
          <p>Find Out How</p>
        </div>
        <div>
          <strong>GO2ANDAMAN.COM</strong>
          <ul>
            <li>About Us</li>
            <li>Jobs at GO2ANDAMAN</li>
            <li>Travel Blog</li>
            <li>Influencers & Brands</li>
            <li>GO2ANDAMAN Reviews</li>
          </ul>
        </div>
        <div>
          <strong>FOR TRAVELLERS</strong>
          <ul>
            <li>Contact Us</li>
            <li>Refunds & Cancellation</li>
            <li>Terms of Service</li>
            <li>Content Disclaimer</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <Image src="/startupindia.svg" preview={false} />
        </div>
      </div>
      <Divider />
      <div>
        <p>WEBPORT MEDIA PVT LTD | CIN No: U63040AN2015PTC000278</p>
      </div>
  </footer>
}