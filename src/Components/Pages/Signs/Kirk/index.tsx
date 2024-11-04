import { useState } from 'react'
import '../style.scss'
import kBanner from '../../../signatureimg/kirk_sign.jpg'
import kS from '../../../signatureimg/kh_spider.jpg'
import kS1 from '../../../signatureimg/kh_spider_1.webp'
import kO from '../../../signatureimg/kh_ouija.jpg'
import kO1 from '../../../signatureimg/kh_ouija_1.jpg'
import kZ from '../../../signatureimg/kh_zombie.webp'
import kZ1 from '../../../signatureimg/kh_zombie_1.jpg'
import kPG from '../../../signatureimg/kh_pick_green.jpg'
import kPG1 from '../../../signatureimg/kh_pick_green_1.webp'
import kPP from '../../../signatureimg/kh_pick_purple.jpg'
import kPP1 from '../../../signatureimg/kh_pick_purple_1.jpg'

const KirkSign = () => {
  const [sign, setSign] = useState(kS)
  const [signO, setSignO] = useState(kO)
  const [signZ, setSignZ] = useState(kZ)
  const [signPG, setSignPG] = useState(kPG)
  const [signPP, setSignPP] = useState(kPP)

  return (
    <>
      <header>
        <div className="title">
          <h1 style={{ fontFamily: 'Sacramento, sans serif' }}>
            Signature <br />{' '}
            <span
              style={{
                fontFamily: 'Big Shoulders Display, sans serif',
                fontWeight: 'bold'
              }}
            >
              World
            </span>
          </h1>
        </div>
        <div className="navBar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </header>
      <section id="signature">
        <img className="banner" src={kBanner} />
        <h2 className="title" style={{ color: '#5139F4' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(kS1)}
                onMouseOut={() => setSign(kS)}
              />
              <p>ESP - Spider</p>
            </li>
            <li>
              <img
                className="product"
                src={signO}
                onMouseOver={() => setSignO(kO1)}
                onMouseOut={() => setSignO(kO)}
              />
              <p>ESP - Ouija</p>
            </li>
            <li>
              <img
                className="product"
                src={signZ}
                onMouseOver={() => setSignZ(kZ1)}
                onMouseOut={() => setSignZ(kZ)}
              />
              <p>ESP - White Zombie</p>
            </li>
            <li>
              <img
                className="product"
                src={signPG}
                onMouseOver={() => setSignPG(kPG1)}
                onMouseOut={() => setSignPG(kPG)}
              />
              <p>Jazz III - Green</p>
            </li>
            <li>
              <img
                className="product"
                src={signPP}
                onMouseOver={() => setSignPP(kPP1)}
                onMouseOut={() => setSignPP(kPP)}
              />
              <p>Jazz III - Purple</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default KirkSign
