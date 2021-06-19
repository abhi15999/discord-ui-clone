import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from './firebase'
function Login() {
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .catch((err)=>{
            console.log(err.message)
        })  
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://media.comicbook.com/2021/05/discord-1268327-1280x0.jpeg"
                alt = "Logo"/>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
