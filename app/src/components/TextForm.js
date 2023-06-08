
import React, {useState} from 'react'
export default function TextForm (props) {
    const handleClick=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const handleloClick=()=>{
        let newtext=text.toLowerCase();
        settext(newtext);
    }
    const handlechange=(event)=>{
     settext(event.target.value);
    }
    const [text,settext]=useState("");
//     const [btnstyle, setbtnstyle] = useState("Enable Dark Mode");
//     const [mystyle, setmystyle] = useState( {
//         color: 'white',
//         background:'black',
//         fontFamily: 'Montserrat'
// }) 
//    const togglestyle=()=>{
//     if(mystyle.color==='white')
//     {
//        setmystyle({ color:'black',
//         background:'white',
//         fontFamily: 'Montserrat'
//     })
//     setbtnstyle("Enable Dark Mode");
//    } 
//     else{
//         setmystyle({ color:'white',
//         background:'black',
//         fontFamily: 'Montserrat'
//     })
//     setbtnstyle("Enable Light Mode");
//     }
// }   
  return (
  <>
    <div style={{color: props.mode==='light'?'black':'white'}}>
   <h2 className="my-2" >{props.heading}</h2>
 <div className="mb-3" >
  <textarea className="form-control" value={text } onChange={handlechange} style={{backgroundColor: props.mode==='dark'?'#042743':'white'}} id="mybox" rows="6"></textarea>
</div>
<button className="btn btn-dark mx-4 my-4" onClick={handleClick}>Convert to Uppercase</button>
<button className="btn btn-dark my-4" onClick={handleloClick}>Convert to Lowercase</button>
{/* <button className="btn btn-dark mx-4 my-4" style={mystyle} onClick={togglestyle}>{btnstyle}</button> */}
    </div>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Your text summary</h3>
        <p className="fw-bold" >{text.split(" ").length} Words and {text.length} characters</p>
        <p className="fw-bold" >{0.0008*text.split(" ").length}Mins Reading Time</p>
        <h3>Preview</h3>
        <p>{text.length===0?"Enter something to preview here":text}</p>
    </div>
  </>
 
  )
}
