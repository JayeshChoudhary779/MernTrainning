
export interface Store{
    books:any[];  
 selectedBook:any;
 toggle:any;
 searchedBook:any[];
 registeredUser:any[];
 loggedInUser:any[];
}

export const store:Store={
   books: [],
    selectedBook:null,
    toggle:null,
    searchedBook:[],
    registeredUser:[],
    loggedInUser:[]
}