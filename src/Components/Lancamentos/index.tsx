import './style.scss'
import rammsteinNews from '../signatureimg/rammstein_news.jpg'
import mickThomsonNews from '../signatureimg/mt_news.jpg'
import tomArayaNews from '../signatureimg/ta_news.jpg'
import releasesimg from '../signatureimg/releasesimg.png'
import monsterGuitarNews from '../signatureimg/monster_guitars_news.png'
import kirkPickNews from '../signatureimg/kirk_pick_news.png'
import jimJaguarNews from '../signatureimg/jim_jaguar_news.png'

const Releases = () => {
  return (
    <>
      <div style={{ textAlign: 'center', paddingBottom: '120px' }}>
        <img style={{ width: '150px', height: '100px' }} src={releasesimg} />
      </div>
      <section
        style={{ paddingTop: '32px', paddingBottom: '32px' }}
        id="releases"
      >
        <div>
          <div data-aos="">
            <img src={rammsteinNews} />
            <div className="news">
              <a href="/rammstein">Rammstein!</a>
              <p>
                A icônica banda Rammstein, conhecida por sua intensidade sonora
                e visual, acaba de lançar uma linha exclusiva de instrumentos
                signature, uma coleção que captura a essência crua e poderosa de
                sua música.
              </p>
            </div>
          </div>
          <div data-aos="">
            <img src={mickThomsonNews} />
            <div className="news">
              <a href="/palhetasmick">Palhetas do Mick Thomson</a>
              <p>
                O lendário guitarrista Mick Thomson, conhecido por seu estilo
                pesado e precisão brutal no Slipknot, acaba de lançar uma linha
                de palhetas signature, desenvolvida para suportar a intensidade
                de suas performances
              </p>
            </div>
          </div>
          <div data-aos="">
            <img src={tomArayaNews} />
            <div className="news">
              <a href="/tomarayabaixo">O baixo de Tom Araya</a>
              <p>
                O icônico vocalista e baixista do Slayer, Tom Araya, revelou seu
                mais novo baixo signature, feito para capturar toda a
                intensidade e agressividade que define o som do thrash metal.
              </p>
            </div>
          </div>
          <div data-aos="">
            <img src={monsterGuitarNews} />
            <div className="news">
              <a href="/kirkguitars">Novas guitarras monsters!</a>
              <p>
                A linha Signature Monsters de Kirk Hammett foi lançada com
                guitarras icônicas que homenageiam os clássicos do terror.
                Modelos como White Zombie e The Mummy trazem arte detalhada e
                captadores EMG, refletindo a paixão de Hammett por horror e
                heavy metal.
              </p>
            </div>
          </div>
          <div data-aos="">
            <img src={kirkPickNews} />
            <div className="news">
              <a href="/jazzpurple">As palhetas Jazz III roxo</a>
              <p>
                A Jazz III roxa Signature de Kirk Hammett foi lançada para
                capturar o toque rápido e preciso do guitarrista. Desenvolvida
                em colaboração com a Dunlop, a palheta apresenta uma superfície
                antiderrapante e um formato ergonômico, ideal para solos ágeis e
                riffs intensos.
              </p>
            </div>
          </div>
          <div data-aos="">
            <img src={jimJaguarNews} />
            <div className="news">
              <a href="/jimwhitejaguar">Jaguar Branca de Jim Root!</a>
              <p>
                A Fender lançou a aguardada Jim Root Jaguar branca, trazendo um
                visual elegante e minimalista com acabamento em branco fosco,
                que reflete o estilo sombrio e pesado do guitarrista do Slipknot
                e do Stone Sour.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Releases