import { ComponentObj } from '@/types/basicStore';
import StaticTextC from '../../components/StaticTextC/index'

interface IComponentList  {
[x: string]: ComponentObj
}

const componentFileNames = [
  StaticTextC
]
export const componentList: IComponentList = {}

componentFileNames.forEach( (item: ComponentObj)=> {
  console.log(item)
  componentList[item.componentName] = item
})

