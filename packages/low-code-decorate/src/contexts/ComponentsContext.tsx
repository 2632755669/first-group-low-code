import { createContext } from 'react';
import { IComponentComposeData } from '@/types';

interface IComponentsContext {
  components: IComponentComposeData[];
  setComponents(componentId: string, parentIds?: string[]): void;
}

export const ComponentsContext = createContext<IComponentsContext>({
  components: [],
  setComponents(componentId, parentIds) {
    
  }
})