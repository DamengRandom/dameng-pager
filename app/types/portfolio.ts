export interface SkillProficiency {
  name: string
  level: number
}

export interface PortfolioMeta {
  name: string
  handle: string
  title: string
  location: string
  tagline: string
  employment: string
}

export interface PortfolioAbout {
  bio: string
  currentWork: string
  learning: string[]
  collaboration: string
}

export interface PortfolioSkills {
  proficiency: SkillProficiency[]
  technologies: string[]
}

export interface PortfolioContact {
  github: string
  linkedin: string
  alternativeSite: string
}

export interface PortfolioData {
  meta: PortfolioMeta
  about: PortfolioAbout
  skills: PortfolioSkills
  knowledge: string[]
  contact: PortfolioContact
}

export type LayoutVariant = 1 | 2 | 3

export interface RandomLayout {
  hero: LayoutVariant
  about: LayoutVariant
  skills: LayoutVariant
  knowledge: LayoutVariant
  contact: LayoutVariant
}
