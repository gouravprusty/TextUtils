import { useState } from "react";
import Button from "./Button";
import Alert from "./Alert";

export default function TextForm() {

    const [text, setText] = useState("");
    const [alert, setAlert] = useState(null);

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleUppercase = () => {
        if(text.trim().length !== 0){
            setText(text.toUpperCase());
            handleAlert("Text converted to UpperCase", "Success");
        }else{
            handleAlert("Enter some text in the textarea", "Failed");
        }
    };

    const handleLowercase = () => {
        if(text.trim().length !== 0){
            setText(text.toLowerCase());
            handleAlert("Text converted to LowerCase", "Success");
        }else{
            handleAlert("Enter some text in the textarea", "Failed");
        };
    };

    const handleClearText = () =>{
        if(text.trim().length !== 0){
            setText("");
            handleAlert("Textarea cleared.", "Success");
        }else{
            handleAlert("Enter some text in the textarea", "Failed");
        }
    };

    const handleCopyText = () => {
        if(text.trim().length > 0){
            navigator.clipboard.writeText(text);
            handleAlert("Text copied to clipboard!", "Success");
        } else{
            handleAlert("Enter some text in the textarea", "Failed");
        }
    };

    const handleRemoveExtraSpace = () => {
        if(text.trim().length > 0){
            setText(text.split(/\s+/).join(" "));
            handleAlert("Extra spaces removed.", "Success");
        }else{
            handleAlert("Enter some text in the textarea", "Failed");
        }
    };

    const handleAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    return (
        <div className="container">
            <div className="mb-3">
                <h1 className="mt-3">Enter the text to analyze</h1>
                <textarea className="form-control" id="textBox" name="textBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter your text here."></textarea>
                <Button content="Convert to UpperCase" clickFunction={handleUppercase} classNames="btn btn-primary mt-3 me-3"/>
                <Button content="Convert to LowerCase" clickFunction={handleLowercase} classNames="btn btn-primary mt-3 me-3"/>
                <Button content="Clear textarea" clickFunction={handleClearText} classNames="btn btn-primary mt-3 me-3"/>
                <Button content="Copy text" clickFunction={handleCopyText} classNames="btn btn-primary mt-3 me-3"/>
                <Button content="Remove extra spaces" clickFunction={handleRemoveExtraSpace} classNames="btn btn-primary mt-3 me-3"/>
            </div>
            <div className="mb-3">
                <Alert alertMsg={alert}/>
                <h1>Your text summary</h1>
                <ul className="mt-3">
                    <li className="mb-2">Number of characters = <b>{text.length}</b></li>
                    <li className="mb-2">Number of words = <b>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}</b></li>
                    <li className="mb-2">Time to read = <b>{(text.length / 6) * 0.008}</b> Mins</li>
                </ul>
                <h2>Text Preview</h2>
                <p className="border border-success-subtle p-3">{text.length === 0 ? "Enter text in the textarea above to preview" : text}</p>
            </div>
        </div>
    )
};