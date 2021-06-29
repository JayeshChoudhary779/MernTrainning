import Booklist from './booklist';
import './Detailsstyle.css';

function Details(){
    return(
        <>
        <h1 style={{marginLeft:"8px"}}>About The Harry Potter and the Chamber of Secrets</h1>
        <p style={{marginLeft:"8px"}}> By JK Rowling | Rs.259 | **** Star</p>
        
<div className="float-container">

  <div className="float-child">
  <div className="section">
    <img src=" https://kbimages1-a.akamaihd.net/1c469dcb-5d48-47cb-a61b-5298babdb0d3/1200/1200/False/harry-potter-and-the-chamber-of-secrets-6.jpg" style={{width:"500px", height:"450px"}}/>
    <br/>
    <br/>
    <button className="deleteButton">Delete Book</button>
    </div>
  </div>
  
  <div className="float-child">
  <div className="section">
    <h1>"Description" :</h1>
    <p> Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.
            </p> 
      </div>
  </div>

</div>
        </>
    );
}

export default Details;