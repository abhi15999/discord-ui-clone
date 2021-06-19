import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TranslateIcon from '@material-ui/icons/Translate';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message'

function Chat() {
    return (
        <div className="chat">
            <ChatHeader/>

            <div className="chat__messages">
                <Message/>
                <Message/>
                <Message/>
                <Message/>

            </div>

            <div className="chat__input">
                
                <AddCircleIcon fontSize="large"/>
                
                <form>
                    <input placeholder={"Message #ABC"}/>
                    <button className="chat__inputButton">
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <TranslateIcon/>
                    <GifIcon/>
                    <EmojiEmotionsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Chat
