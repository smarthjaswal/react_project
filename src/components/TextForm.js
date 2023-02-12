import React, { useState } from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=>{
    //   console.log("Uppercase was clicked"+ text);
      let newText = text.toUpperCase();
      setText(newText);
      
    }
    const handleLowClick = ()=>{
        //   console.log("Uppercase was clicked"+ text);
          let newText = text.toLowerCase();
          setText(newText);
          
        }
        const handleClearClick = ()=>{
            //   console.log("Uppercase was clicked"+ text);
              let newText =(' ');
              setText(newText);
              
            }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
      }
    const [text, setText] = useState('');
    // setText("New Text");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange = {handleOnChange}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-3'>
         <h2>Your text summary</h2>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} minutes to read</p>
         <h2>Peview</h2>
         <p>{text}</p>








        </div>
        </>
    )
}
