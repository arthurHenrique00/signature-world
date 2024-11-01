import './style.scss'
import xIcon from '../signatureimg/x_logo.png'
import fbIcon from '../signatureimg/fb_logo.png'
import inst from '../signatureimg/insta_logo.png'
import location from '../signatureimg/location_icon.png'
import email from '../signatureimg/email_icon.png'
import telefone from '../signatureimg/tel_icon.png'

const Contact = () => (
  <section id="contact" style={{ marginTop: '120px' }}>
    <div className="cardsContact" style={{ alignItems: 'center' }}>
      <div>
        <img src={location} />
        <p>Rua: Bootstrap, Bairro: HTML, número: 137</p>
      </div>
      <div>
        <img src={email} />
        <p>signature@example.com</p>
      </div>
      <div>
        <img style={{ marginTop: '8px' }} src={telefone} />
        <p>(99) 9999-9999</p>
      </div>
    </div>
    <div style={{ display: 'flex' }} className="talkUs">
      <form>
        <label className="form-label" htmlFor="name">
          Seu nome :
        </label>
        <input
          id="name"
          className="form-control"
          type="text"
          placeholder="Digite seu nome"
        />
        <label className="form-label" htmlFor="email">
          Seu e-mail :
        </label>
        <input
          id="email"
          className="form-control"
          type="email"
          placeholder="Digite seu email"
        />
        <label className="form-label" htmlFor="mnsgm">
          Sua mensagem :
        </label>
        <textarea
          id="mnsgm"
          className="form-control"
          style={{ resize: 'none' }}
          placeholder="Nos deixe uma mensagem!"
        ></textarea>
        <button>Enviar</button>
      </form>
      <div>
        <h2>Fale Conosco</h2>
        <p>
          Estamos aqui para ajudar você a encontrar o instrumento perfeito que
          traduza sua paixão pela música. Entre em contato conosco para tirar
          dúvidas sobre modelos signature, especificações técnicas,
          disponibilidade e qualquer outra informação que precisar!.Nossa equipe
          está pronta para oferecer suporte especializado e guiá-lo em cada
          etapa da sua experiência. Quer saber mais sobre um artista específico,
          o processo de fabricação, ou precisa de orientações sobre o
          instrumento ideal para seu estilo? Envie uma mensagem!
        </p>
        <ul className="socialLogo">
          <li>
            <a href="">
              <img src={xIcon} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={fbIcon} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={inst} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Contact
