import {Inc, Dec,Mlt} from "./ActionType";
export const Add =(value)=>{
    return{
        type:Inc,
        payload:value,
    }

}
export const Remove =(value)=>{
    return{
        type:Dec,
        payload:value

    }
}
export const Multi =(value)=>{
    return{
        type:Mlt,
        payload:value

    }
}