import './style.scss'
import sepulturaSobre from '../signatureimg/sepul_sobre.jpg'
import metallicaSobre from '../signatureimg/metall_sobr.webp'
import megadethSobre from '../signatureimg/megadeth_sobr.jpg'

const Sobre = () => (
  <section id="sobre">
    <div id="carousel-home" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div data-bs-interval="1000" className="carousel-item active">
          <img
            style={{ width: '450px', height: '450px', borderRadius: '9px' }}
            src={sepulturaSobre}
          />
        </div>
        <div className="carousel-item">
          <img
            style={{ width: '450px', height: '450px', borderRadius: '9px' }}
            src={metallicaSobre}
          />
        </div>
        <div className="carousel-item">
          <img
            style={{ width: '450px', height: '450px', borderRadius: '9px' }}
            src={megadethSobre}
          />
        </div>
      </div>
    </div>
    <div style={{ marginLeft: '64px' }}>
      <h2>Sobre o site</h2>
      <p>
        Bem-vindo ao{' '}
        <span
          style={{ fontFamily: 'Sacramento, sans serif', fontSize: '24px' }}
        >
          Signature world
        </span>
        , o lugar definitivo para conhecer instrumentos e itens exclusivos dos
        maiores ícones do heavy metal! Este é um portal inteiramente dedicado a
        exibir uma coleção curada de guitarras, baixos, baterias e acessórios
        signature usados e aprovados por lendas como James Hetfield, Dave
        Mustaine, Kerry King, entre outros. Nosso site não é uma loja: somos uma
        vitrine digital onde você pode explorar e se inspirar nos equipamentos
        que definiram o som e o estilo do metal em todas as suas vertentes. Cada
        item vem com detalhes técnicos, especificações únicas, curiosidades
        sobre o desenvolvimento e insights sobre como esses instrumentos são
        usados pelos próprios músicos.
      </p>
    </div>
  </section>
)

export default Sobre
