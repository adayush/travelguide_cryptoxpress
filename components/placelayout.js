import styles from './placelayout.module.css'
import { Image, Card, Collapse } from 'antd'

const { Panel } = Collapse

export function Datacontent({ data, id }) {
  return <div className={styles.datacontent} id={data.type}>
    <h2>{data.heading}</h2>
    <Card className={styles.card} bodyStyle={{padding: "1rem"}}>
      {data.text.map((t, i) => <p key={i}>{t}</p>)}
      {data.type === "faq"
      ? data.list.length > 0 &&
          <Collapse accordion bordered={false} className={styles.collapse}>
            {data.list.map((l, i) => 
              <Panel header={l.item} key={i}>
                <p>{l.description}</p>
              </Panel>
            )}
          </Collapse>
      : data.list.length > 0 &&
          <ol>
            {data.list.map((l, i) => <li key={i}>
              <p>
                {l.link
                ? <strong><a href={l.link}>{l.item}</a></strong>
                : <strong>{l.item}</strong>
                }
                {l.text && <>: {l.text}</>}
              </p>
              {l.image &&
                <Image
                  src={`/images/${id}/${l.image}`}
                  alt={l.image}
                  preview={false}
                />
              }
              {l.description && <p>{l.description}</p>}
            </li>)}
          </ol>
        }
      {data.posttext && data.posttext.map((t, i) => <p key={i}>{t}</p>)}
    </Card>
    <Image src='/divider.png' alt='divider' height={10} preview={false} />
  </div>
}

export default function Placelayout({ placeData }) {
  return <div className={styles.main}>
    <section className={styles.cover}>
      <Image
        height={400}
        src={`/images/${placeData.id}/${placeData.bgimage}`}
        preview={false}
        alt={placeData.bgimage}
      />
      <div className={styles.overlay}>
        <div>
          <h1>{placeData.name}</h1>
          <span>Travel Guide - Top Things to Do & See, Hotel & Resorts, Restaurants & Cafe and more</span>
        </div>
      </div>
    </section>
    <div className={styles.gap}></div>
    <div className={styles.content}>
      <div>
        <div>
          <h2>Table of content</h2>
          <Card className={styles.card} bodyStyle={{padding: "1rem"}}>
            <ul>
              {placeData.data.map((item, i) => <li key={i}>
                <a href={`#${item.type}`}>
                  {item.heading}
                </a>
              </li>)}
            </ul>
          </Card>
          {placeData.data.map(item => <Datacontent key={item.type} data={item} id={placeData.id} />)}
        </div>
      </div>
      <div className={styles.sidecard}>
        <Card className={styles.card} bodyStyle={{padding: "1rem"}}>
          <h2>Popular Tourist Islands</h2>
          <ul>
            <li>Port Blair - Capital City</li>
            <li>Havelock Island</li>
            <li>Neil Island</li>
            <li>Baratang</li>
          </ul>
          <h2>About Andaman Islands</h2>
          <ul>
            <li>Entry Formalities</li>
            <li>Geography</li>
            <li>Flora & Fauna</li>
            <li>Tourists Do&apos;s & Dont&apos;s</li>
            <li>How Safe is Andaman?</li>
          </ul>
          <h2>Popular Places to Visit</h2>
          <ul>
            <li>Cellular Jail</li>
            <li>Ross Island</li>
            <li>Radhanagar Beach</li>
            <li>Jolly Buoy</li>
            <li>North Bay</li>
            <li>Natural Rock Bridge, Neil Island</li>
            <li>Barren Island</li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
}