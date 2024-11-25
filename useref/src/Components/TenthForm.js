import React, { useRef } from 'react'

export default function TenthForm() {
    let FirstNameInputref = useRef();
    let LastNameInputref = useRef();
    let engInputRef=useRef();
    let telInputRef=useRef();
    let hinInputRef=useRef();
    let matInputRef=useRef();
    let sciInputRef=useRef();
    let socInputRef=useRef();
    let resultparaRef=useRef();
  return (
<div>
      <form>
      <div>
        <label>FirstName</label>
        <input ref={FirstNameInputref}></input>
      </div>
    
    <div>
    <label>LastName</label>
    <input ref={LastNameInputref}></input>
  </div>
  <div>
        <label>English</label>
        <input ref={engInputRef}></input>
      </div>
      <div>
        <label>Hindi</label>
        <input ref={hinInputRef}></input>
      </div>
      <div>
        <label>Telugu</label>
        <input ref={telInputRef}></input>
      </div>
      <div>
        <label>Maths</label>
        <input ref={matInputRef}></input>
      </div>
      <div>
        <label>Science</label>
        <input ref={sciInputRef}></input>
      </div>
      <div>
        <label>Social</label>
        <input ref={socInputRef}></input>
      </div>
      <div>
        <button type="button" onClick={()=>{
           // alert(engInputRef.current.value);
            let FirstName =FirstNameInputref.current.value;
            let LastName =LastNameInputref.current.value;
            let engMarks = Number(engInputRef.current.value);
            let telMarks =Number(telInputRef.current.value);
            let hinMarks =Number(hinInputRef.current.value); 
            let matMarks =Number(matInputRef.current.value);
            let sciMarks =Number(sciInputRef.current.value);
            let socMarks = Number(socInputRef.current.value);
            let totalMarks = engMarks+telMarks+hinMarks+matMarks+sciMarks+socMarks;
            alert(totalMarks);
            let perc = totalMarks/600*100;
            resultparaRef.current.innerHTML=` ${FirstName} ${LastName} got total marks of ${totalMarks} with percentage of${perc}%`;
            
        }}>Calculate Result</button>

      </div>
      <div>

        <p ref={resultparaRef}>Please Enter Values</p>
      </div>
      </form>
</div>

)
};