import { createContext } from 'react';
import { IComponentTree } from '@/types';
import { ComponentNameEnum } from '@/enums'
import { generateUUID } from '@/utils/generateUUID'

interface IComponentsContext {
  componentTree: IComponentTree;
  setComponents(componentId: string, parentIds?: string[]): void;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const DEFAULT_COMPONENT_TREE = {
  componentName: ComponentNameEnum.Root,
  props: {},
  id: generateUUID(),
  parentIds: null,
  children: []
}

export const ComponentsContext = createContext<IComponentsContext>({
  componentTree: DEFAULT_COMPONENT_TREE,
  selectedIds: [],
  setComponents(componentId, parentIds) { },
  setSelectedIds(v){}
})