import React from 'react'

export default function Body() {
    return (
        <>
        <form className="form-floating" rows = "8" >
        <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com" />
        <label for="floatingInputValue" >Enter your email</label>
        
      </form>
 <br/>
 <br/>
 <br/>
 <br/>

 <h1>Edit your text here</h1>
<div>
<textarea className="form-control"  rows="8"></textarea>
<br/>
<button className="btn btn-primary">Convert to UpperCase</button>

</div>
        </>
    )
}
