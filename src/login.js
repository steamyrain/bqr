import "../static/css/main.css";
import axios from 'axios';

async function login(data){
    try{
        await axios.post('http://localhost:3030/public/login',data,{withCredentials: true})
            .then( val => {
                window.location.assign('home')
            });
    } catch (error){
        console.log(error);
    }
}

window.onload = ()=>{
    document.getElementById('login').addEventListener('submit', ()=>{
        event.preventDefault();
        let data = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        login(data)
    })
}
