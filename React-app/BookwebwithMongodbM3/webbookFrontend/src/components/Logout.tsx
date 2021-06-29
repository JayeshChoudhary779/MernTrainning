
import {useHistory} from 'react-router-dom';

function Logout(){

    const history = useHistory();
    (!(window.confirm("Are you sure?")))?
     history.push("/")
     :
    localStorage.removeItem("authToken")
    console.log("logeed out")
    return(
        <>
        <h1>Thank you !</h1>
        <h1>You have been logged out !</h1>
        </>
    );
    
}

export default Logout;