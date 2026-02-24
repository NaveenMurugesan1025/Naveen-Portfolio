function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <p>Here are some of the projects I've worked on:</p>

      <ul>
        <li>
          Project 1: A React-based web application for Cafe Business ({' '}
          <a href="https://orucupcoffee.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="view-project-btn">View Project</button>
          </a>
          )
        </li>
        <li>Project 2: A Node.js backend service for handling user authentication.</li>
        <li>Project 3: A MongoDB database schema for storing user data.</li>
      </ul>
    </div>
  );
}

export default Projects;
