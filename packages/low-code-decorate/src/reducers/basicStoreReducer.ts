
import { ComponentInfo } from '@/clazz/style';
import { ComponentObj, BasicStore } from '@/types/basicStore';

export const initialBasicStore = []

export default (state: BasicStore, action: { type: string, payload: any }) => {
    const { type, payload } = action
    switch (type) {
        case 'appendComponent':
            return appendComponent(state, payload)
        case 'refresh':
            return [ ...state]
            
        default:
            return state
    }
}

/**
 * desc 添加组件
 * 
*/
function appendComponent(state: BasicStore, payload: any) {
    
    return [ ...state, payload ]
}
