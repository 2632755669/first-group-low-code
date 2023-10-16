import { createContext } from 'react';
import { IComponentTree, IComponentProps, FormItemInfo } from '@/types';
import { ComponentNameEnum } from '@/enums';
import { generateUUID } from '@/utils/generateUUID';
import { cloneDeep } from 'lodash';

interface IComponentsContext {
  selectedIds: string[];
  component: IComponentTree | null;
  componentTree: IComponentTree;
  componentProps: IComponentProps;
  componentFormSchema: FormItemInfo[] | null;
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  addComponent(componentId: string, parentIds?: string[]): void;
  editComponentProps(values: IComponentProps, ids: string[]): void;
}

export const DEFAULT_COMPONENT_TREE = {
  componentName: ComponentNameEnum.Root,
  props: {},
  id: generateUUID(),
  parentIds: null,
  children: []
}

export const findComponentById = (componentTree:IComponentTree ,ids: string[]): IComponentTree | never => {
  if (ids.length <= 1) {
    if (ids[0] === componentTree.id) {
      return componentTree;
    } else {
      throw new Error(`the id ${ids[0]} is not exisit!`); 
    }
  } else {
    const idsClone = cloneDeep(ids);
    if (componentTree.componentName === ComponentNameEnum.Root) idsClone.shift();
    const id = idsClone.shift();
    const component = componentTree.children.find(item => item.id === id);
    if (!component) throw new Error(`the id ${id} is not exisit!`);
    return findComponentById(component, idsClone)
  }
}

export const ComponentsContext = createContext<IComponentsContext>({
  selectedIds: [],
  component: null,
  componentProps: {},
  componentFormSchema: null,
  componentTree: DEFAULT_COMPONENT_TREE,
  setSelectedIds(v){},
  editComponentProps(){},
  addComponent() {},
})