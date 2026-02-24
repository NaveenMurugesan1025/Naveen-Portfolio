import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import './App.css';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Tools',
    items: ['VS Code', 'Git', 'GitHub', 'Netlify','copilot'],
  },
  {
    title: 'React Frameworks',
    items: ['useState', 'useEffect','react-router-dom','create-react-app'],
  }
];

const projects = [
  {
    title: 'Cafe Business Web App',
    description:
      'A React-based cafe website focused on clean UI, product browsing, and user-friendly flow.',
    live: 'https://orucupcoffee.netlify.app/',
    source: 'https://github.com/NaveenMurugesan1025',
  },
  {
    title: 'Salon Booking API',
    description:
      'It helps customers booking salon services by visiting the salon website.',
    live: 'https://vanthavettuvomhair.netlify.app/',
    source: 'https://github.com/NaveenMurugesan1025',
  },
  {
    title: 'Training Management System',
    description:
      'A comprehensive training management system for managing Students training Courses.',
    live: 'https://trainingmanagementforstudents.netlify.app/',
    source: 'https://github.com/NaveenMurugesan1025',
  },
];

function App() {
  return (
    <div className="page-shell">
      <div className="site-glow glow-one" />
      <div className="site-glow glow-two" />

      <Navbar />

      <main>
        <section id="home" className="section hero">
          <div className="hero-content">
            <p className="eyebrow">React Developer</p>
            <h1>
              I build clean, fast, and modern web experiences for real users.
            </h1>
            <p className="hero-text">
              Hi, I am Naveen Murugesan. I enjoy creating responsive interfaces, solving
              practical problems, and shipping production-ready web applications.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">View Projects</a>
            
              <a className="btn btn-ghost" href="#contact">Hire Me</a>
            </div>
          </div>

          <aside className="photo-card depth-card">
            <div className="photo-badge">Open to Work</div>
            <img src="/portfolio-photo.jpg" alt="Naveen Murugesan" className="profile-photo" />
          </aside>
        </section>

        <section id="about" className="section panel">
          <h2>About Me</h2>
          <p>
            I am a Web developer focused on React.js and Node.js. I have a passion for building clean, user-friendly web applications that solve real problems. I enjoy learning new technologies and continuously improving my skills to stay up-to-date with industry trends.
          </p>
          <a
            className="btn btn-primary"
            href="/NaveenMurugesanReact-Developer.pdf"
            download
          >
            Download Resume
          </a>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card depth-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card depth-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-actions">
                  <a className="btn btn-primary" href={project.live} target="_blank" rel="noopener noreferrer">
                    View Live
                  </a>
                  <a className="btn btn-ghost" href={project.source} target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section panel contact-panel">
          <h2>Contact</h2>
          <p>Ready to collaborate on your next project.</p>
          <div className="contact-links">
            <a className="btn btn-primary" href="mailto:naveenmurugesan@gmail.com">
              Send Email
            </a>
            <a className="btn btn-ghost" href="https://github.com/NaveenMurugesan1025" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/naveen-murugesan-123456789/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
