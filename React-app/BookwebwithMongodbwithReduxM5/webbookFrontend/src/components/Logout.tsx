
import {useHistory} from 'react-router-dom';
import * as Bms from "../reducers/bms-reducer";
import { useContext,useEffect } from 'react';
import {bmsContext} from "../reducers/bms-context";

function Logout(){

    console.log("first")
    let {dispatch}=useContext(bmsContext);
    
    // const history = useHistory();
    // if(!(window.confirm("Are you sure?"))){
    //  history.push("/")
    // }

    localStorage.removeItem("authToken")
  
    useEffect(()=>{
        dispatch({type: Bms.USER,payload:false})
        },[]);
        // dispatch({type: Bms.USER,payload:false})
   

    return(
        <>
        <h1>Thank you !</h1>
        <h1>You have been logged out, Now you will be in View Mode!</h1>
        </>
    );
    
}

export default Logout;