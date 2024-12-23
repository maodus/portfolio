import "./ProjectCard.css"
import {CardInfo} from "../types/CardInfo"

export default function ProjectCard({
  title,
  icon,
  demoLink,
  repoLink,
  children,
}: CardInfo) {
  return (
    <div className="card-container">
      <div className="card-head">
        <img className="card-icon" src={icon} />
        <h2>{title}</h2>
      </div>
      <div className="card-content">{children}</div>
      <div className="card-footer">
        <div className="card-links">
          {demoLink && <button>Unimplemented</button>}
          {repoLink && <button>Unimplemented</button>}
        </div>
      </div>
    </div>
  )
}
