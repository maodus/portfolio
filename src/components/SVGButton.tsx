import "./SVGButton.css"

export default function SVGButton({
  text,
  icon,
  destination,
}: {
  text: string
  icon: string
  destination?: string
}) {
  return (
    <a className="svg-button" href={destination} target="_blank">
      <img className="svg-button-icon" src={icon}></img>
      <span className="svg-button-text">{text}</span>
    </a>
  )
}
