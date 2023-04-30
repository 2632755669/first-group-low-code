

import React from 'react'
import StaticTextComponent, { componentName } from './config'
// import README from './README.md'

export default {
  componentName,
  component: React.lazy( ()=> import('./StaticTextC') ),
  config: StaticTextComponent,
  instance: null
}
