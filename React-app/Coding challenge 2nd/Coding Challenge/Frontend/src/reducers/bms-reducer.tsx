import {Store} from "./bms-store"
interface Action{
    type:string;
    payload?:any;
}

export const USER="USER";
export const SHOW="SHOW";
export const UPDATED_SHOP="UPDATED_SHOP";

export const reducer=(initialState:Store,action:Action)=>{

    switch(action.type){
        case USER:
            return{
                    ...initialState,
               screen:action.payload  
           }    
           case SHOW:
            return{
                    ...initialState,
               show:action.payload  
           }    
         case UPDATED_SHOP:
             return{
                ...initialState,
                updatedShop:action.payload  
             }  
    }
  return initialState;
}