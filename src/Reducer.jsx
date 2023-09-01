import { Inc ,Dec,Mlt } from "./ActionType";

let initialState =0;

export const reducer =(state=initialState,action)=>{
    switch (action.type) {
        case Inc:
            return Number(state) + Number(action.payload)
            break;
        case Dec:
            return Number(state) - Number(action.payload)
        case Mlt:
            return Number(state) * Number(action.payload)

        default:
            return state
            break;
    }

}