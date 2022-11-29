import styles from './brand.module.css'
import { Button, Card, Carousel, Image, Input, Space } from 'antd'

export default function Brand() {
  return <div className={`container ${styles.brand}`}>
    <div className={styles.care}>
      <h2>We Care.</h2>
      <div>
        <Card className={styles.card}>
          <Image src="images/brand/conversation.svg" alt='conversation' preview={false} />
          <p>Customer Happiness</p>
          <span>We&apos;re delighted to help you. Anything you need, we&apos;re available.</span>
        </Card>
        <Card className={styles.card}>
          <Image src="images/brand/payment.svg" alt='payment' preview={false} />
          <p>Secure Payments</p>
          <span>We take your security seriously. Use our data-protected, user-friendly payment gateway to process payments safely.</span>
        </Card>
        <Card className={styles.card}>
          <Image src="images/brand/sheild.svg" alt='sheild' preview={false} />
          <p>No Hidden Costs</p>
          <span>What you see is what you get.</span>
        </Card>
        <Card className={styles.card}>
          <Image src="images/brand/reliability.svg" alt='reliability' preview={false} />
          <p>Fast Confirmations</p>
          <span>Be confident that your trip is set. Get ready for the experience.</span>
        </Card>
      </div>
    </div>
    <div className={styles.actions}>
      <Card className={styles.card}>
        <div className={styles.row}>
          <p>Subscribe to Mailer</p>
          <Image src="images/brand/mailer.svg" alt='mailer' width={60} preview={false} />
        </div>
        <p>Stay updated with all the excitement that Andamans has to offer</p>
        <Space>
          <Input type='email' />
          <Button type="primary" style={{ backgroundColor: "#01b46c" }}>Submit</Button>
        </Space>
      </Card>
      <Card className={styles.card}>
        <div className={styles.row}>
          <p>Collaborate with us for Blog/Content</p>
          <Image src="images/brand/blog.webp" alt='blog' width={60} preview={false} />
        </div>
        <p>If you have a flair for writing, write for us and get featured.</p>
      </Card>
      <Card className={styles.card}>
        <div className={styles.row}>
          <p>Be your own tour guide.</p>
          <Image src="images/brand/tour.svg" alt='tour' width={60} preview={false} />
        </div>
        <p>Get lost or never. You decide. Download our handy tour guides to plan your trip.</p>
      </Card>
    </div>
    <div className={styles.why}>
      <h2>Why Choose Us?</h2>
      <div>
        <Card className={styles.card}>
          <Image src="images/brand/handshake.svg" alt='handshake' preview={false} />
          <p>Local Expertise</p>
          <span>By the locals, for the world</span>
        </Card>
        <Card className={styles.card}>
          <Image src="images/brand/hotel-1.svg" alt='hotel' preview={false} />
          <p>The Choicest Experiences</p>
          <span>Only the best experiences make it to G2A</span>
        </Card>
        <Card className={styles.card}>
          <Image src="images/brand/sunset.svg" alt='sunset' preview={false} />
          <p>Tailor-make your own holiday</p>
          <span>Build your holiday your way</span>
        </Card>
      </div>
    </div>
    <div className={styles.reviews}>
      <h2>They ❤️ Us</h2>
      <Image src="images/brand/quote-1.svg" alt='quote' width={80} preview={false} />
      <Carousel autoplay>
        <div>
          <p>It was a perfect location for family fun, the erstwhile Ross Island has all the history of a mini Paris, albeit at the cost of all Indian labour and is an example of the British opulence over poverty stricken India. Perfect for taking pics and the picturesque light house was delightful. We took the buggy as we were a large family with kids. There are deer and peacocks too.</p>
          <p>Sangeetha S</p>
        </div>
        <div>
          <p>This is a over hyped, and not worth the time and money spent to reach here. It used to be called the “Paris of the East” when the British settled here. But everything is destroyed now.</p>
          <p>The only good place here is a beach that is on the other side. You will need to climb down and up a lot of steps to get there.</p>
          <p>Jagneswar G</p>
        </div>
        <div>
          <p>Ross Island is ideally a two part trip, the morning to evening portion includes going around the island looking at the ruins from the era of the British and Japanese rule. the late evening portion includes a spectacular sound, light &amp; video show (yes you read it correctly!!) which has been created specially for Ross island by Revathi (the actress)</p>
          <p>Sudhir Kamath</p>
        </div>
      </Carousel>
    </div>
  </div>
}