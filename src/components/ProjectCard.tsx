import "./ProjectCard.css"
import {CardInfo} from "../types/CardInfo"
import SVGButton from "./SVGButton"
import TechStack from "./TechStack"

export default function ProjectCard({
  title,
  icon,
  demoLink,
  repoLink,
  tech,
  children,
}: CardInfo) {
  return (
    <div className="card-container">
      <div className="card-head">
        <img className="card-icon" src={icon} />
        <h2>{title}</h2>
        {tech && (
          <div style={{marginLeft: "auto"}}>
            <TechStack tech={tech} />
          </div>
        )}
      </div>
      <div className="card-content">{children}</div>
      <div className="card-footer">
        <div className="card-links">
          {repoLink && (
            <SVGButton
              text="GitHub"
              icon="https://www.svgrepo.com/show/512317/github-142.svg"
              destination={repoLink}
            />
          )}
          {demoLink && (
            <SVGButton
              text="Showcase"
              icon="https://www.svgrepo.com/show/513089/youtube-168.svg"
              destination={demoLink}
            />
          )}
        </div>
      </div>
    </div>
  )
}
