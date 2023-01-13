import React ,{useState}from 'react';

export default function TextForm(props) {

    

    const handleUPClickUpper=()=>{
        let newText = text.toUpperCase();
        setText(newText );
    }

    const handleUPClickLower=()=>{
        let newText = text.toLowerCase();
        setText(newText );
    }
    const handleUpClickClear=()=>{
        let newText = "";
        setText(newText );
    }

    const handleUpClickCopy=()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleUpClickExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        console.log(newText);
        setText(newText.join(" "));
    }

    const handleOnChange= (event) => {
        setText(event.target.value)
    }

    const[ text , setText ] = useState("");

  return (
    <>
    <div className="container" style={{backgroundColor : props.mode === 'light' ? 'white' : '#343536' , color : props.mode === 'light'? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode === 'light' ? 'white' : '#343536' , color : props.mode === 'light'? 'black' : 'white'}}></textarea>
        </div> 
            <button className="btn btn-primary  m-1" onClick={handleUPClickUpper}>Convert To UpperCase</button>
            <button className="btn btn-primary  m-1" onClick={handleUPClickLower}> Convert To LowerCase </button>
            <button className="btn btn-primary  m-1" onClick={handleUpClickClear}> Clear Text </button>
            <button className="btn btn-primary  m-1" onClick={handleUpClickCopy}> Copy Text </button>
            <button className="btn btn-primary  m-1" onClick={handleUpClickExtraSpace}> Delete Extra Space </button>
    </div>  
    <div className="container my-3" style={{backgroundColor : props.mode === 'light' ? 'white' : '#343536',color : props.mode === 'light' ? 'black':'white'}}>
        <h2>Your Text Summary </h2>
        <p> {text.split(" ").length} Words and {text.length} Characters </p>
        <p> {0.008*text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
     
    </>
    
  )
}
