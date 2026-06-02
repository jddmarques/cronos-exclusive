export interface Brand {
  name: string
  slug: string
  svgFile: string
}

export const brands: Brand[] = [
  { name: 'Seiko', slug: 'seiko', svgFile: 'seiko.svg' },
  { name: 'Citizen', slug: 'citizen', svgFile: 'citizen.svg' },
  { name: 'Orient', slug: 'orient', svgFile: 'orient.svg' },
  { name: 'Tissot', slug: 'tissot', svgFile: 'tissot.svg' },
]
