import { ComponentObj } from '@/types/basicStore';
import React, { FC } from 'react';
import StaticTextC from '../../components/StaticTextC/index'

const componentFileNames = [
  StaticTextC
]
export const componentList: {[x: string]: ComponentObj} = {}
componentFileNames.forEach( (item: ComponentObj)=> {
  console.log(item)
  componentList[item.componentName] = (item)
})

