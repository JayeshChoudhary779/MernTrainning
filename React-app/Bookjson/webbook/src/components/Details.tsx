import Booklist from './booklist';
import './Detailsstyle.css';

function Details(){
    return(
        <>
        <h1 style={{marginLeft:"8px"}}>About The Accursed God</h1>
        <p style={{marginLeft:"8px"}}> By Vivek Dutta Mishra | Rs.199 | ***** Star</p>
        
<div className="float-container">

  <div className="float-child">
  <div className="section">
    <img src="http://thelostepic.com/wp-content/uploads/2021/04/THE-ACCURSED-GOD-Front-780x1100-1.jpg" style={{width:"550px", height:"600px"}}/>
    <br/>
    <br/>
    <button className="deleteButton">Delete Book</button>
    </div>

  </div>
  
  <div className="float-child">
  <div className="section">
    <h1>"Description" :</h1>
    <p> "THE LOST EPIC ============ <br/>The story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations — and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions.<br/> <br/>THE ACCURSED GOD ================ <br/>Long before the epic battle, long before even the birth of Kurukshetra, a man swore on his father’s pyre to avenge against the mightiest empire, any civilization had ever seen. Between his might and near-certain destruction of the Empire, stood a warrior, who rose like a phoenix from the ashes of his seven dead brothers — taking the mantle of a fabled Accursed God. In the clash that followed, Aryavart heard several more oaths by the side of more burning pyres, until, a young king decided that no price is too high for peace. Little did he know that the price would be a war engulfing the entire Aryavart, where few would live to tell the tale. And only one man can delay the inevitable if not prevent it. He is the accursed God and even he doesn’t know that destiny is like a quicksand, the more he tries to prevent it, the faster Aryavart moves towards the ultimate catastrophe. Discover the saga of a man’s journey to that of a legendary and universally hated Accursed God, the saga of the ruthless ambitions and unfulfilled loves, endless deceits and vengeful oaths, and the saga of the battles to prevent the ultimate war.<br/> <br/>TESTIMONIALS ============= <br/>When is the last time you finished a book and discover something? Here is a gripping and intriguing take on the greatest epic of all time through the eyes of its pivotal character that leaves your mind exhilarated, adding a fresh perspective to the tale that’s known, yet unknown. Throughout the fast action-packed book, the author masterfully blends politics, war and science and blurs the gap between love and hate, peace and war, and fiction and reality. A must-read novel which will leave you wanting for more. --- Colonel Avanish, Indian Army",</p>
   </div>
  </div>

</div>
        </>
    );
}

export default Details;