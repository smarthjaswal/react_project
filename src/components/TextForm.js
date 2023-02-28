import React, { useState } from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=>{
      // console.log("Uppercase was clicked"+ text);
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
            const handleCopy =()=>{
              var text = document.getElementById('myBox');
              text.select();
              navigator.clipboard.writeText(text.value);
            }
            const handleExtraSpaces = ()=>{
              let newText = text.split(/[ ]+/);
              setText(newText.join(" "))
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
                <textarea className="form-control" value={text} onChange = {handleOnChange}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

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
