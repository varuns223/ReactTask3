import React from 'react'

function Listcolor(props) {
  const handlechange = (elem)=>{
    props.setcol([]);
    props.setcurrcol(elem);
    console.log(elem);
  }
  return (
    <>
 <div className="colorlist">
    {props.col.map((elem)=>{
        return <div key = {elem} className="listcol" style={{backgroundColor:elem}} onClick={()=>handlechange(elem)}>
            
        </div>
    })}
 </div>
    </>
  )
}

export default Listcolor
