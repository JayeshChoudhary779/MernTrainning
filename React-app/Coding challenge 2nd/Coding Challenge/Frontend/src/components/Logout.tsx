
import {useHistory} from 'react-router-dom';
import { useEffect,useContext} from 'react';
import * as Bms from "../reducers/bms-reducer";
import {bmsContext} from "../reducers/bms-context";
function Logout(){

    
    let {dispatch}=useContext(bmsContext);
    const history = useHistory();

    useEffect(()=>{
        dispatch({type: Bms.USER,payload:"null"})
    },[])

    localStorage.removeItem("authToken")
    localStorage.removeItem("screen")
    localStorage.removeItem("customerInfo")
    localStorage.removeItem("userInfo")
    localStorage.removeItem("adminInfo")
   

    return(
        <>
        <h1>Thank you !</h1>
        <h1>You have been logged out!</h1>
        </>
    );
    
}

export default Logout;