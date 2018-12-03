const presetColors = [
  '#FF69B4', // 'hotpink',
  '#0000FF', // 'blue',
  '#666666',
  '#DAA520', // 'goldenrod',
  '#008B8B', // 'darkcyan',
  '#40E0D0', // 'turquoise',
  '#FF7F50', // 'coral',
  '#FFD700', // 'gold',
  '#BA55D3', // 'MediumOrchid',
  '#FF0000', // 'red',
  '#008000', // 'green',
  '#DB7093', // 'palevioletred',
  '#4169E1', // 'royalblue',
  '#D2691E', // 'chocolate',
  '#20B2AA', // 'lightseagreen',
  '#FA8072' // 'salmon'
]

export function randomColor () {
  return presetColors[Math.floor(Math.random() * presetColors.length)]
}
