

import React from 'react'
import StaticTextComponent, { componentName } from './config'
// import README from './README.md'

const StaticTextC = {
  componentName,
  component: React.lazy( ()=> import('./StaticTextC') ),
  config: StaticTextComponent,
  instance: null
}


export default StaticTextC