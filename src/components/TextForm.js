import React, { useState } from "react";
export default function TextForm(props) {

  const [word, setWord] = useState(3)
  const showWord = () => {
    if (text.length) {
      setWord(text.split(' ').length)
    }
    else {
      setWord(0)
    }
  }
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to UpperCase', 'success')
  }

  const handleLowerClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to LowerCase', 'success')

  }
  const handleOnChange = (event) => {
    setText(event.target.value)
    showWord()
  }
  const handleClearClick = () => {
    setText('')
    props.showAlert('Clear!', 'success')
    setWord(0)

  }
  const handleExtraSpace = () => {
    const extraSpaceText = text.split(/[ ]+/g)
    setText(extraSpaceText.join(" "));
    props.showAlert('Removed Extra Spaces', 'success')

  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied!', 'success')

  }
  const [text, setText] = useState('Type Here !');
  return (<>
    <div className="container">
      <h1 className={`my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h1>
      <div className="mb-3">
        <textarea value={text} className={`form-control my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{ backgroundColor: props.mode === 'dark' ? '#4f4a6e' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3">
      <h2 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Your Text Details</h2>
      <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{word} Words {text.length} characters</p>
      <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text.length === 0 ? '0' : (0.008 * (text.split(' ').length))} Minutes Read</p>
      <h2 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Preview</h2>
      <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text.length > 0 ? text : 'Enter Something in the TextBox to Preview it Here'}</p>
    </div>

  </>
  )
}