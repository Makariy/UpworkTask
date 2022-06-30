import { useState } from "react";
import { submitForm } from "../../../API/interactor";
import Input from "../../commons/input/input";
import "./form.css";



const Form = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const onSubmit = e => {
        e.preventDefault()
        submitForm(username, email)
            .then(response => {
                setError("")
                alert("Form submitted successfully!")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <form className="form">
            <Input placeholder={"Enter username..."} value={username} setValue={setUsername}/>
            <Input placeholder={"Enter email..."} value={email} setValue={setEmail}/>
            <input className="submit" type="submit" value="Submit" onClick={onSubmit}/>
            <p className="error">{error}</p> 
        </form>
    );
}

export default Form;