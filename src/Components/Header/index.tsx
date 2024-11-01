import './style.scss'

const Header = () => (
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
        <li>
          <a href="#bandas">Bandas</a>
        </li>
        <li>
          <a href="#releases">Lançamentos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
