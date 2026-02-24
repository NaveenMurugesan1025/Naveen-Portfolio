function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
      <p>Copyrights {year} Naveen Murugesan. All rights reserved.</p>
       <a href="mailto:naveenmurugesan@gmail.com"> | naveenmurugesan@gmail.com | </a> {' '}
      </p>
    </footer>
  );
}

export default Footer;
