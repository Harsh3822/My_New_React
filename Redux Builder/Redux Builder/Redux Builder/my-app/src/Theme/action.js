import { SWITCH_THEME } from "../actiontype";

export function ChangeTheme(val){
    return{type:SWITCH_THEME,payload:val}
}