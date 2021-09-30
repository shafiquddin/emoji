import react from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App(){
  return (
    <div>
      <h1>
        <span>emojipedia</span></h1>
        <dl className="dictionary">{emojipedia.map(term=>{
            return(
              <Entry
              key={term.id}
              name={term.name}
              emoji={term.emoji}
              meaning={term.meaning}/>
            );
        })}</dl>  
    </div>
  )
}
export default App;