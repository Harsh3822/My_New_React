import { ADD, REDUCE } from "../actiontype"


export function AddToCounter(val){
    return{type:ADD,payload:val}
}
export function ReduceToCounter(val){
    return{type:REDUCE,payload:val}
}