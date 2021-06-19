import React from 'react'
import { Avatar } from '@material-ui/core'
import './Message.css'


function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                <h4>
                    Abc
                    <span 
                    className="message__timestamp">
                        10:00:00
                    </span>
                </h4>
                <p>Message here!</p>
            </div>
        </div>
    )
}

export default Message
