import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked" +  text);
        let newTxt = text.toUpperCase();
         setText(newTxt);
    }
const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value)
}
    const [text, setText] = useState('Enter your text here');

    return (
        <div>
     <h1>{props.heading} </h1>
<div className="mb-3">
<label for="myTxt" className="form-label"></label>
<textarea className="form-control" value={text} onChange= {handleOnChange} id="myTxt" rows="8"></textarea>
</div>
    <button className="btn btn-primary" onClick= {handleUpClick}>Convert to UpperCase</button>
        </div>
        
    )
}
