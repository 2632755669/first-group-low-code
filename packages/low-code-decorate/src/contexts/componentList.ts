import { ComponentObj } from '@/types/basicStore';
import React, {type Dispatch} from 'react';

export const curComponentConText = React.createContext<{curComponent: ComponentObj|null, dispatch: Dispatch<{type: string, payload: any}>}>({
  curComponent: null,
  dispatch: ()=> {}
});
