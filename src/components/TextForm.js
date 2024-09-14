import React, {useState} from 'react'

export default function TextForm (props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked", + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to uppercase!","success");
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked", + text);
     let newtext = text.toLowerCase();
     setText(newtext)
     props.showAlert("converted to lowercase!","success");
     
   }
   const handleCopy = ()=>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy text!","success");

   }
   const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("reove extra space!","success");
   }
   const handleClearClick = ()=>{
    // console.log("Uppercase was clicked", + text);
     let newtext = '';
     setText(newtext)
     props.showAlert("clear text!","success");
   }
  const handleOnChange = (event)=>{
    //console.log("Uppercase was clicked");
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  //setText("on Change ");
  return (
    <>
    <div className='container my-3' style={{color:  props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:  props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black' }} id="myBox" rows="8" placeholder='Enter your text here...............'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces </button>
    </div>
    <div className='container my-3' style={{color:  props.mode === 'dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here......" }</p>
    </div>
    </>
  )
}
