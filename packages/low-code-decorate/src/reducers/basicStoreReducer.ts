
import { BasicStore } from '@/types/basicStore';

export const initialBasicStore = []

const basicStoreReducer = (state: BasicStore, action: { type: string, payload: any }) => {
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

export default basicStoreReducer

/**
 * desc 添加组件
 * 
*/
function appendComponent(state: BasicStore, payload: any) {
    
    return [ ...state, payload ]
}
