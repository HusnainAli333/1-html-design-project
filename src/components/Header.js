export default function Header() {
  return (
    <header className="header">
      <img
        src="./img/omnifood-logo.png"
        alt="omni food logo"
        className="logo-img"
      />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <ul>
            <button className="btn1">section1</button>
          </ul>
          <ul>
            <button className="btn1">section2</button>
          </ul>
          <ul>
            <button className="btn1">section3</button>
          </ul>
          <ul>
            <button className="btn1">section4</button>
          </ul>
          <ul>
            <button className="btn1 btn-last">section5</button>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
