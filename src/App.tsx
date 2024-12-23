import './App.css'
import ProjectCard from "./components/ProjectCard"

function App() {
  return (
    <>
      <div>
        <img
          className="portrait-img"
          src="https://avatars.githubusercontent.com/u/34797411?v=4"
        ></img>
        <h2>Nicholas Maodus</h2>
        <label>Computer Science Student</label>
        <p>
          I am a computer science student at the University of Alberta,
          expecting to graduate in Spring of 2025. I have a deep passion for
          technology and programming, with a particular interest in lower-level
          development.
        </p>
        <hr />
      </div>
      <h1>Projects</h1>
      <div>
        <ProjectCard
          icon="https://www.svgrepo.com/show/375397/compute-engine.svg"
          title="Gazprea Compiler"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque ornare quam in feugiat. Aliquam erat volutpat. Morbi
            mauris est, euismod eu nibh et, luctus ultrices metus. Donec porta
            eget elit et pretium. Cras finibus, tortor eu sollicitudin semper,
            ligula lacus tincidunt velit, varius rutrum elit dolor sit amet leo.
            Cras ut eleifend tellus. Nulla placerat quam eget tortor pretium,
            sed consequat diam suscipit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis at lorem a metus pharetra ultrices sed eu
            magna. Sed consequat suscipit lobortis.
          </p>
        </ProjectCard>
        <ProjectCard
          icon="https://www.svgrepo.com/show/375469/os-inventory-management.svg"
          title="EZVault"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque ornare quam in feugiat. Aliquam erat volutpat. Morbi
            mauris est, euismod eu nibh et, luctus ultrices metus. Donec porta
            eget elit et pretium. Cras finibus, tortor eu sollicitudin semper,
            ligula lacus tincidunt velit, varius rutrum elit dolor sit amet leo.
            Cras ut eleifend tellus. Nulla placerat quam eget tortor pretium,
            sed consequat diam suscipit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis at lorem a metus pharetra ultrices sed eu
            magna. Sed consequat suscipit lobortis.
          </p>
        </ProjectCard>
        <ProjectCard
          icon="https://www.svgrepo.com/show/375408/data-loss-prevention-api.svg"
          title="Who's Gone?"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque ornare quam in feugiat. Aliquam erat volutpat. Morbi
            mauris est, euismod eu nibh et, luctus ultrices metus. Donec porta
            eget elit et pretium. Cras finibus, tortor eu sollicitudin semper,
            ligula lacus tincidunt velit, varius rutrum elit dolor sit amet leo.
            Cras ut eleifend tellus. Nulla placerat quam eget tortor pretium,
            sed consequat diam suscipit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis at lorem a metus pharetra ultrices sed eu
            magna. Sed consequat suscipit lobortis.
          </p>
        </ProjectCard>
        <ProjectCard
          icon="https://www.svgrepo.com/show/375550/beyondcorp.svg"
          title="Monuments VR"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque ornare quam in feugiat. Aliquam erat volutpat. Morbi
            mauris est, euismod eu nibh et, luctus ultrices metus. Donec porta
            eget elit et pretium. Cras finibus, tortor eu sollicitudin semper,
            ligula lacus tincidunt velit, varius rutrum elit dolor sit amet leo.
            Cras ut eleifend tellus. Nulla placerat quam eget tortor pretium,
            sed consequat diam suscipit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis at lorem a metus pharetra ultrices sed eu
            magna. Sed consequat suscipit lobortis.
          </p>
        </ProjectCard>
      </div>
    </>
  )
}

export default App
