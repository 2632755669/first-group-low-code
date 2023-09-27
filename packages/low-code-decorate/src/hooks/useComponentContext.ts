import { useContext } from 'react';
import { ComponentsContext } from '@/contexts';

export const useComponentContext = () => {
  const { componentTree, setComponents, selectedIds, setSelectedIds } = useContext(ComponentsContext);

  return {
    componentTree,
    setComponents,
    selectedIds,
    setSelectedIds
  }

}