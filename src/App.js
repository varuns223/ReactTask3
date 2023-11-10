import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Listcolor from './component/Listcolor';



function App() {
  const colors = ["red" , "green" , "blue" , "black" , "pink" , "white" , "yellow" , "violet" , "aqua"];
  const[col , setcol] = useState([]);
  const[currcol , setcurrcol] = useState("white");
  const setcolor = ()=>{
    setcol(colors);
  }
  return (
   <>
     <h2>Color Picker</h2>
     <div className="cont" style={{backgroundColor:currcol}}>
           <div className="container my-3">
              <Listcolor col = {col} setcurrcol = {setcurrcol}  setcol = {setcol}/>
           </div>
          <button onClick={setcolor} className='btn btn-success' >Pick a color</button>
     </div>
   </>
  );
}

export default App;
