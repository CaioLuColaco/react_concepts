import '../styles/header.scss'

export function Header() {
  return (
    <header className="header">
      <div>
        <h1>NormaLabs</h1>
        <img src="/logo.svg" alt="to.do"/>
        {/* <img src="/fotoPerfil.png" alt="to.do"/> */}
      </div>
    </header>
  )
}