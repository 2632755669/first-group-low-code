import { ComponentObj } from '@/types/basicStore';

export const initialCurComponent = null

export default (state: ComponentObj|null, action: { type: string, payload: any }) => {
    const { type, payload } = action
    switch (type) {
        case 'setCurComponent':
            return payload.component;

        case 'remove': 
            return payload;

        case 'changeCurComponentStyle': 
            return changeCurComponentStyle(state!, payload);

        case 'changeCurComponentProps': 
            return changeCurComponentProps(state!, payload);
            
        default:
            return state
    }
}

/**
 *  desc 改变curComponent的 位置宽高等信息 positionStyle 
 */ 

function changeCurComponentStyle(state: ComponentObj, payload: any) {
    console.log(state)
    if(payload.type == 'font'){
    state!.instance!.style.setFont(payload)

    }else{
    state!.instance!.style.setPos(payload)

    }
    
    return { ...state }
}

function changeCurComponentProps(state: ComponentObj, payload: any) {
    return { ...state }
}