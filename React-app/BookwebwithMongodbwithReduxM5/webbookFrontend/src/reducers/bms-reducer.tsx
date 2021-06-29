import {Store} from "./bms-store"

  

interface Action{
    type:string;
    payload?:any;
}

export const BOOKS_GET_ALL="BOOKS_GET_ALL";
export const USERS_GET_ALL="USERS_GET_ALL";
export const BOOKS_ADD_BOOK="BOOKS_ADD_BOOK";
export const BOOKS_DELETE_BOOK="BOOKS_DELETE_BOOK";
export const BOOKS_SEARCH_BY_TITLE="BOOKS_SEARCH_BY_TITLE";
export const BOOKS_SEARCH_BY_AUTHOR="BOOKS_SEARCH_BY_AUTHOR";
export const BOOKS_SEARCH_BY_RATING="BOOKS_SEARCH_BY_RATING";
export const BOOKS_SEARCH_BY_VOTES="BOOKS_SEARCH_BY_VOTES";
export const BOOKS_SEARCH_BY_PRICE="BOOKS_SEARCH_BY_PRICE";
export const BOOKS_DETAILS="BOOKS_DETAILS";
export const USER_REGISTER="USER_REGISTER";
export const USER_LOGIN="USER_LOGIN";
export const USER="USER";

export const reducer=(initialState:Store,action:Action)=>{

    switch(action.type){
        case BOOKS_GET_ALL:
             return{
            ...initialState,
            books:action.payload     
            }

        case USERS_GET_ALL:
             return{
            ...initialState,
            LoggedInUser:action.payload     
            }
        case BOOKS_DETAILS:
              return{
               ...initialState,
               selectedBook:action.payload     
               }    

        case BOOKS_ADD_BOOK:
            return{
            ...initialState,
            books:[...initialState.books,action.payload] 
            }

        case BOOKS_DELETE_BOOK:
            return{
                ...initialState,
                selectedBook:null,
                books:initialState.books.filter(b=> b._id!==action.payload)
            }
            
        case BOOKS_SEARCH_BY_TITLE:
            return{
                ...initialState,
                searchedBook: action.payload
            }

        case BOOKS_SEARCH_BY_AUTHOR:
            return{
                ...initialState,
                searchedBook: action.payload
            }      

        case BOOKS_SEARCH_BY_RATING:
            return{
                ...initialState,
                searchedBook: action.payload
            }

        case BOOKS_SEARCH_BY_VOTES:
            return{
                ...initialState,
                searchedBook: action.payload
            }

        case BOOKS_SEARCH_BY_PRICE:
            return{
                ...initialState,
                searchedBook: action.payload
            }     

        case USER_REGISTER:
            return{
                ...initialState,
            registeredUser:action.payload  
            }

            
        case USER_LOGIN:
            return{
                ...initialState,
            loggedInUser:action.payload  
            }

        case USER:
            return{
                    ...initialState,
               toggle:action.payload  
           }    


        // case USER_LOGIN:
        //     const obj={email:"", token:""};
        //     for(let i=0;i<initialState.loggedInUser.length;i++)
        //     {
        //         if(initialState.loggedInUser[i].email=== action.payload.email && initialState.loggedInUser[i].password=== action.payload.password){
        //             obj.email=initialState.loggedInUser[i].email;
        //             obj.token= "xxxx";
        //         }
        //     }
        
        //  return{
        //     ...initialState,
        //     loginSuccess:{...obj}
        //     // loginSuccess: initialState.loggedInUser.filter((user:any)=> user.email===action.payload.email  && user.password===action.payload.password)
        //  }
    }

    return initialState;

}