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
      <img src={icon}></img>
      <span>{text}</span>
    </a>
  )
}
