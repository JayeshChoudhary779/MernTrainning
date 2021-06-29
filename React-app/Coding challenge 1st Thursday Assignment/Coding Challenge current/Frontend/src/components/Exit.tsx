
import {useHistory} from 'react-router-dom';

function Exit(){

    const history = useHistory();
    (!(window.confirm("Are you sure?")))?
     history.push("/")
     :
    localStorage.removeItem("authToken")
    return(
        <>
        <h1>Thank you!</h1>
        <h1>You have been Exited!</h1>
        </>
    );
    
}

export default Exit;