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
      <h2>Projects</h2>
      <div className="project-showcase">
        <ProjectCard
          icon="https://www.svgrepo.com/show/375397/compute-engine.svg"
          title="Gazprea Compiler"
          demoLink="null"
        >
          <p>
            This closed-source compiler was built for{" "}
            <a href="https://cmput415.github.io/415-docs/gazprea/">Gazprea</a>,
            a language derived from one created at IBM's Hardware Acceleration
            Lab. The compiler features a modular, heterogeneous AST design and
            an object-oriented type system supporting scalars, vectors,
            matrices, and tuples. It includes: type checking with implicit
            promotion and casting, optimizations like constant folding, and
            integrates with LLVM for platform-independent code generation.
          </p>
        </ProjectCard>
        <ProjectCard
          icon="https://www.svgrepo.com/show/375469/os-inventory-management.svg"
          title="EZVault"
          repoLink="https://github.com/CMPUT301F23T21/EZVault"
        >
          <p>
            EZVault is an open-source inventory management Android app developed
            in Java using Android Studio. It enables users to efficiently manage
            inventory, track stock levels, and streamline organization. The app
            uses Firestore for customer data storage and Firebase Storage for
            media management. Its CRUD implementation allows for asynchronous
            communication with Firebase backends, and it also supports barcode
            scanning for quick item entry.
          </p>
        </ProjectCard>
        <ProjectCard
          icon="https://www.svgrepo.com/show/375408/data-loss-prevention-api.svg"
          title="Who's Gone?"
          repoLink="https://github.com/maodus/whosgone"
        >
          <p>
            Who's Gone is a lightweight Python program designed to identify
            Instagram users who don't follow you back and whom you don't follow.
            Unlike web-based tools, it handles large datasets without being
            affected by Instagram's rate limits. Since it runs locally, there's
            no risk of account flagging or rate-limiting. User's can choose to
            viualize their results in a minimal HTML file, or via CLI.
          </p>
        </ProjectCard>
        <ProjectCard
          icon="https://www.svgrepo.com/show/375550/beyondcorp.svg"
          title="Portfolio Website"
        >
          <p>
            This portfolio website was developed using React and TypeScript,
            offering a responsive design that ensures a seamless experience
            across all screen sizes. It leverages React's component-based
            architecture to create a modular environment, which enhances code
            maintainability and allows for more efficient development.
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
