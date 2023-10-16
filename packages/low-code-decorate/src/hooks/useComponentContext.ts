import { useContext } from 'react';
import { ComponentsContext } from '@/contexts';

export const useComponentContext = () => {
  const {
    componentTree,
    addComponent,
    componentProps,
    componentFormSchema,
    component,
    editComponentProps,
    selectedIds,
    setSelectedIds
  } = useContext(ComponentsContext);

  return {
    component,
    componentTree,
    componentProps,
    componentFormSchema,
    addComponent,
    editComponentProps,
    selectedIds,
    setSelectedIds
  }

}