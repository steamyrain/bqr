import "../static/css/main.css";
import axios from "axios";

async function signUp(){
    // get form values
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const password2 = document.getElementById("password2").value

    // sign up data
    const userData = {
        "email":email,
        "password":password,
        "password2":password2
    }

    try {
        const response = await axios.post("http://localhost:3030/public/register",userData)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

window.onload = () => {
    document.getElementById("formSignUp").addEventListener("submit", () => {
        event.preventDefault();
        signUp();
    })
}
