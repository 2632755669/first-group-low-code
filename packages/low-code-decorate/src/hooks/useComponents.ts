import { IComponentComposeData } from "@/types"
import { useState } from "react"
import { ALL_COMPONENTS, ComponentNameEnum } from '@/config/components';
import { generateUUID } from '@/utils/generateUUID'


export const useComponent = () => {
  const [components, setComponents] = useState<IComponentComposeData[]>([])

  const findComponentPosition = (components: IComponentComposeData[], parentIds?: string[]): IComponentComposeData[] | null | undefined => {
    if (!parentIds || !parentIds.length) {
      return components
    } else if (components.length) {
      const parentIdsClone = JSON.parse(JSON.stringify(parentIds))
      const id = parentIdsClone.shift();
      const currentComponent = components.find(item => item.id === id);
      if (currentComponent) {
        if (!currentComponent.children) currentComponent.children = []
        return findComponentPosition(currentComponent.children, parentIdsClone)
      }
    } else {
      return null
    }
  }

  const addComponent = (componentId: ComponentNameEnum, parentIds?: string[]) => {
    const uuid = generateUUID();
    if (!parentIds) {
      const currentComponents = findComponentPosition(components) || [];
      currentComponents.push({...ALL_COMPONENTS[componentId], id: uuid})
    } else if (parentIds.length) {
      const currentComponents = findComponentPosition(components, parentIds) || [];
      currentComponents.push({...ALL_COMPONENTS[componentId], id: uuid})
    }
    setComponents([...components])
  }
  const removeComponent = (id: string, parentIds: string[]) => {

  }
  const moveComponent = (id: string, parentIds: string[], targetIds: string[]) => {

  }

  return {
    components, 
    addComponent,
    removeComponent,
    moveComponent
  }
}