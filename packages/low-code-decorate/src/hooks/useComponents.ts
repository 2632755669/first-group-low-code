import { IComponentTree, IComponentProps, FormItemInfo } from "@/types"
import { useMemo, useState } from "react"
import { getComponentInfo, COMPONENT_MAP } from '@/config/components';
import { DEFAULT_COMPONENT_TREE , findComponentById} from '@/contexts'
import { ComponentNameEnum } from '@/enums'

export const useComponent = () => {
  
  const [componentTree, setComponents] = useState<IComponentTree>(DEFAULT_COMPONENT_TREE)

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const component = useMemo<IComponentTree | null>(() => {
    if (!selectedIds?.length) return null;
    const component = findComponentById(componentTree, selectedIds);
    return component;
  }, [selectedIds, componentTree]);

  const componentProps = useMemo<IComponentProps>(() => {
    if (!component) return {};
    const props = component.props;
    return props;
  }, [component]);

  const componentFormSchema = useMemo<FormItemInfo[] | null>(() => {
    if (component) {
      return COMPONENT_MAP[component.componentName].properties
    }
    return null
  }, [component])

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

  const editComponentProps = (values: IComponentProps, ids: string[]) => {
    const component = findComponentById(componentTree, ids);
    const [key, value] = Object.entries(values)[0]
    component.props[key] = value;
    setComponents({...componentTree})
  }

  const removeComponent = (id: string, parentIds: string[]) => {

  }

  const moveComponent = (id: string, parentIds: string[], targetIds: string[]) => {

  }


  return {
    selectedIds,
    component,
    componentProps,
    componentTree,
    componentFormSchema,
    addComponent,
    setSelectedIds, 
    editComponentProps,
    removeComponent,
    moveComponent
  }
}