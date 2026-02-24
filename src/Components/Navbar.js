function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home">Naveen Murugesan</a>

      <nav aria-label="Main navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <a className="resume-chip" href="/NaveenMurugesanReact-Developer.pdf" download>
        Download Resume
      </a>
    </header>
  );
}

export default Navbar;
