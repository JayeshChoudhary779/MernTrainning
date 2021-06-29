import React, {createContext, useContext,useReducer } from "react";

import {store} from "./bms-store";
import * as Bms from "./bms-reducer";
import * as actions from "./bms-actions"

console.log("BMS",Bms);

console.log("actions:",actions);

let bmsContext =createContext<any>({});


const BmsProvider=(props:any)=>{
    let [state,dispatch]=useReducer(Bms.reducer,store);
    return(<bmsContext.Provider value={{...state,...actions,dispatch}}>
        {props.children}
    </bmsContext.Provider>)
}

export {bmsContext,BmsProvider};
