import "../styles/Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#hero">about</a>
          </li>
          <li>
            <a href="#experience">experience</a>
          </li>
          <li>
            <a href="#project">projects</a>
          </li>
          <li>
            <a href="#clubs">clubs</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
