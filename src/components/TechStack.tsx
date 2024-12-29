import {TechName, techBank} from "../types/Technology"
import "./TechStack.css"

export default function TechStack({tech}: {tech: TechName[]}) {
  return (
    <div className="tech-container">
      {tech.map((techName, idx) => {
        return (
          <div key={idx}>
            <img
              className="tech-svg"
              title={techBank[techName].displayName}
              alt={techBank[techName].displayName}
              src={techBank[techName].iconLink}
            ></img>
          </div>
        )
      })}
    </div>
  )
}
