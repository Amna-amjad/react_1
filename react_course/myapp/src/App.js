
import './App.css';
import Navbar1 from './components/Navbar1';
import TextForms from './components/TextForms';

function Web() {
  return (
    <>

<Navbar1 title = "TextEdits" aboutText = "About TextEdits" />
<div className="container my-3">

<TextForms heading = "Enter your text here"/>
</div>




</>
  );
}

export default Web;
