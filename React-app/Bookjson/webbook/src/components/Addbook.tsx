
import {BrowserRouter as Router, useHistory, Switch, Route, BrowserRouter,Link} from 'react-router-dom';
import './Addbookstyle.css';
import React, { Component, useState } from 'react';
import Axios from "axios";
import Booklistgrid from './booklistgrid';


function Addbook(){

    
const history = useHistory();

    const[cover,setCover]=useState("");
    const[title,setTitle]=useState("");
    const[author,setAuthor]=useState("");
    const[price,setPrice]=useState("");
    const[rating,setRating]=useState("");
    const[votes,setVotes]=useState("");
    // const[status,setStatus]=useState(true);
    
    // function addNew(){
    //     setStatus(true);
    // }

    function submit(e:any){
     e.preventDefault();
     if (cover === "" || title === ""||author === "" || price === ""||rating === "" || votes === "") {
        alert("All the fields are mandatory!");
        return;
      }
    console.log('hyy')
    let data={cover,title,author,price,rating,votes};

    console.log(data);
    Axios.post("http://localhost:3006/Books",data)
    .then(res=>{
        console.log("hello :" +res)
    })
    .catch(error=>{
        console.log(error)
    });
    
    //  fetch("http://localhost:3006/Books",{
    //      method:'POST',
        
    //      headers:{
    //          'Accept':"application.json, text/plain, */*",
    //          'Content-Type':"application.json,text/plain, */*"
    //      },
    //      body:JSON.stringify(data)
    //  })
    //  .then((res)=>{
    //      res.json().then((resp:any)=>{
    //          console.log("resp",resp)
    //      })
    //  })
    // }
    
    history.push("/Booksgrid");
    // setStatus(false);
    }
    
   
return(
    // status?
    

<div className="bgimage">
    <div className="container">
       
  <h2 style ={{color: "#333"}}>Add new book details...</h2>
  {/* <br/>
  <Link to={`/Books`} className="booklist">Show Book List</Link> */}
                   
         <form onSubmit={submit}>
             <br/>
       <input type="text"  placeholder="Book cover Id.." name="cover" value={cover} id="cover" onChange={(e)=>setCover(e.target.value)}/>
           <br/>
                     <input type="text" id="title" placeholder="Book name.." name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                     <br/>
                     <input type="text" id="author" placeholder="Author name.."name="author"value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                     <br/>
                     <input type="text" id="price" placeholder="Price.."name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                     <br/>
                     <input type="text" id="rating" placeholder="Rating.."name="rating" value={rating} onChange={(e)=>setRating(e.target.value)} />
                     <br/>
                     <input type="text" id="votes" placeholder="Votes.."name="votes"value={votes} onChange={(e)=>setVotes(e.target.value)}/>
                     
                     <input type ="submit" value='ADD BOOK' id="addbutton" />

                   </form>
                 </div>
                 </div>
            //      :
            //      <>
            //      history.push("/Books");
            // //   <div className="newLine">
            // //         <Booklistgrid/>
            // //   </div>
            // //   <div className="text-center">
            // //   <input onClick={addNew} type ="submit" value='Add New Book Again' id="addbutton1" />
            // //   </div>
            //     </>
       );
        
}
export default Addbook;




// type MyProps = {  };
// type MyState = { cover:string
//     title: string
//     author: string
//     price: string
//     rating: string 
//     votes: string
// };


// export default class Addbook extends Component<MyProps,MyState>{
    
//         userData:any;
    
//         constructor(props:any) {
//             super(props);
    
//             this.onChangeCover = this.onChangeCover.bind(this);
//             this.onChangeTitle = this.onChangeTitle.bind(this);
//             this.onChangeAuthor = this.onChangeAuthor.bind(this);
//             this.onChangePrice = this.onChangePrice.bind(this);
//             this.onChangerating = this.onChangerating.bind(this);
//             this.onChangeVotes = this.onChangeVotes.bind(this);
//             this.onSubmit = this.onSubmit.bind(this);

//             this.state = {
//                 cover:'',
//     title: '',
//     author: '',
//     price: '',
//     rating: '',
//     votes: ''
//             }
//         }
    
        
//     onChangeCover(e:any) {
//         this.setState({ cover: e.target.value })
//     }

//     onChangeTitle(e:any) {
//         this.setState({ title: e.target.value })
//     }

//     onChangeAuthor(e:any) {
//         this.setState({ author: e.target.value })
//     }

//     onChangerating(e:any) {
//         this.setState({ rating: e.target.value })
//     }

//     onChangeVotes(e:any) {
//         this.setState({ votes: e.target.value })
//     }

//     onChangePrice(e:any) {
//         this.setState({ price: e.target.value })
//     }
    

//     onSubmit(e:any) {
//         e.preventDefault()
//         console.log("hyy submit")
//         let newbook=this.userData;
//         console.log("newbook is : " +(typeof newbook));
      
// }


// // componentDidMount() {
// //         this.setState({
// //             cover: this.userData.cover,
// //             title: this.userData.title,
// //             author: this.userData.author,
// //             price: this.userData.price,
// //             rating: this.userData.rating,
// //             votes: this.userData.votes
// //         })
// //     } 


// // componentWillUpdate(nextProps:any, nextState:any) {
    
// //     this.userData=nextState;
// //     // localStorage.setItem('user', JSON.stringify(nextState));
// // }

//     render() {
//         return(
//              <div className="container">
                
//            <h2 style ={{color: "#333"}}>Add new book details...</h2>
//            <br/>
//            <Link to={`/Books`} className="booklist">Show Book List</Link>
                            
//                   <form onSubmit={this.onSubmit}>
//                       <br/>
//                 <input type="text" id="bid" placeholder="Book cover Id.." name="Bid" value={this.state.cover} onChange={this.onChangeCover}/>
//                     <br/>
//                               <input type="text" id="bname" placeholder="Book name.."value={this.state.title} onChange={this.onChangeTitle}/>
//                               <br/>
//                               <input type="text" id="aname" placeholder="Author name.."name="Aname"value={this.state.author} onChange={this.onChangeAuthor}/>
//                               <br/>
//                               <input type="text" id="price" placeholder="Price.."name="Price" value={this.state.price} onChange={this.onChangePrice}/>
//                               <br/>
//                               <input type="text" id="rating" placeholder="Rating.."name="Rating" value={this.state.rating} onChange={this.onChangerating} />
//                               <br/>
//                               <input type="text" id="votes" placeholder="Votes.."name="Votes"value={this.state.votes} onChange={this.onChangeVotes}/>
                              
//                               <input type ="submit" value='ADD BOOK' id="addbutton" />

//                             </form>
//                           </div>
//                 );
//                  }
//                 }
