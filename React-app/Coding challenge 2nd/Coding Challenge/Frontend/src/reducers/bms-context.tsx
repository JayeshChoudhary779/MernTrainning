import React, {createContext, useContext,useReducer } from "react";

import {store} from "./bms-store";
import * as Bms from "./bms-reducer";

console.log("BMS",Bms);


let bmsContext =createContext<any>({});


const BmsProvider=(props:any)=>{
    let [state,dispatch]=useReducer(Bms.reducer,store);
    return(<bmsContext.Provider value={{...state,dispatch}}>
        {props.children}
    </bmsContext.Provider>)
}

export {bmsContext,BmsProvider};
