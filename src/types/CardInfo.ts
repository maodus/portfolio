import {TechName} from "./Technology"

// Type for project card inputs/parameters
export type CardInfo = {
  title: string // Project name
  icon: string // Icon path
  demoLink?: string // Optional link to youtube
  repoLink?: string // Optional link to github
  children?: React.ReactElement | React.ReactElement[] // Optional DOM elements for the body of the card
  tech?: TechName[] // Optional technology stack
}
