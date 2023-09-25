import { useContext } from 'react';
import { ComponentsContext } from '@/contexts';

export const useComponentContext = () => {
  const { components, setComponents } = useContext(ComponentsContext);

  return {
    components,
    setComponents
  }

}