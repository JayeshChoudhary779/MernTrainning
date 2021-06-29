
import {useHistory} from 'react-router-dom';
import './Author.css';
import { useContext } from 'react';
import {bmsContext} from "../reducers/bms-context";
const jwt = require('jsonwebtoken');

function Author(){
    const token= localStorage.getItem("authToken")
    const history = useHistory();
// jwt.verify(token,'jh',function(err:any){
//   if(err){
//     console.log("token is expired")
//      history.push("/login");
//   }
// })


let {books}=useContext(bmsContext);

      const authorArray = new Array()
      books.map((post:any)=>{ 
        authorArray.push(post.author)
        })

        console.log(authorArray)
 

        const uniqueAuthor = authorArray.filter((author, index) => {
            return authorArray.indexOf(author) === index;
        })
        console.log(uniqueAuthor)

    
    console.log(uniqueAuthor)

          return(
              <>
              <h1>Author's Names :</h1>
              <div className="author">{
               uniqueAuthor.map((post:any)=>{ 
                return(
                    <> 
                       <h1 className="authorn">{post}</h1><br/>
                       </>
                );
                }
          ) }
          </div>
          </>
          );
        
}

export default Author;