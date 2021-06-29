import Booklist from './booklist';
import './Detailsstyle.css';

function Details(){
    return(
        <>
        <h1 style={{marginLeft:"8px"}}>About "Harry Potter and the Prisoner of Azkaban"
            </h1>
        <p style={{marginLeft:"8px"}}> By "JK Rowling" | Rs.400 | **** Star</p>
        
<div className="float-container">

  <div className="float-child">
  <div className="section">
    <img src="https://kbimages1-a.akamaihd.net/69eca8ca-652c-4641-b86f-42de460a6d4d/1200/1200/False/harry-potter-and-the-prisoner-of-azkaban-6.jpg
      " style={{width:"550px", height:"600px"}}/>
     <br/>
    <br/>
    <button className="deleteButton">Delete Book</button>
    </div>
  </div>
  
  <div className="float-child">
  <div className="section">
    <h1>"Description" :</h1>
    <p>  Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby's sinister predictions seem to be coming true.",
           </p>
   </div>
  </div>

</div>
        </>
    );
}

export default Details;