import { IComponentTree } from "@/types"
import { useState } from "react"
import { getComponentInfo } from '@/config/components';
import { DEFAULT_COMPONENT_TREE } from '@/contexts'
import { ComponentNameEnum } from '@/enums'


export const useComponent = () => {
  
  const [componentTree, setComponents] = useState<IComponentTree>(DEFAULT_COMPONENT_TREE)

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const findComponentPosition = (componentTree: IComponentTree, parentIds?: string[]): IComponentTree  => {
    if (!parentIds || !parentIds.length) {
      return componentTree
    } else {
      const parentIdsClone = JSON.parse(JSON.stringify(parentIds))
      const id = parentIdsClone.shift();
      const currentComponent = componentTree.children.find(item => item.id === id);
      if (currentComponent) {
        return findComponentPosition(currentComponent, parentIdsClone)
      }
    }
    return componentTree;
  }

  const addComponent = (componentId: ComponentNameEnum, parentIds?: string[]) => {
    if (!parentIds?.length) {
      const currentComponent = findComponentPosition(componentTree);
      currentComponent.children.push(getComponentInfo(componentId, []))
    } else {
      const parentIdsClone = JSON.parse(JSON.stringify(parentIds))
      parentIdsClone.shift()
      const currentComponent = findComponentPosition(componentTree, parentIdsClone);
      currentComponent.children.push(getComponentInfo(componentId, parentIds))
    }
    setComponents({...componentTree})
  }

  const removeComponent = (id: string, parentIds: string[]) => {

  }

  const moveComponent = (id: string, parentIds: string[], targetIds: string[]) => {

  }

  return {
    selectedIds,
    setSelectedIds, 
    componentTree, 
    addComponent,
    removeComponent,
    moveComponent
  }
}