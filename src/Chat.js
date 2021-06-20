import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TranslateIcon from '@material-ui/icons/Translate';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message'
import { useSelector } from 'react-redux';
import { selectChannelId,selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase'
import firebase from 'firebase';


function Chat() {
    const channelId = useSelector(selectChannelId)
    const user = useSelector(selectUser)
    const channelName = useSelector(selectChannelName)
    const [input,setInput] = useState("")
    const [messages,setMessages] = useState([])

    useEffect(()=>{
        if(channelId){
            db.collection("channels").doc(channelId).collection("messages").orderBy("timestamp","desc")
            .onSnapshot((snapshot)=>
                // console.log(snapshot.docs.map((doc)=>{return(doc.data())}))
                setMessages(snapshot.docs.map((doc)=>{
                    return(
                        doc.data()
                        )
                    }
                    ))
            );
        }
    },[channelId])


    const submitHandler = (e) => {
        e.preventDefault()
        db.collection("channels").doc(channelId).collection("messages").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            user:user
        })
        setInput("")
    }

    return (
        <div className="chat">
            <ChatHeader
            channelName={channelName}
            />

            <div className="chat__messages">
                {messages.map((m)=>
                    {
                        return (
                                <Message
                                timestamp={m.timestamp}
                                message={m.message}
                                user={m.user}
                                />
                            )
                   }
                )}

            </div>

            <div className="chat__input">
                
                <AddCircleIcon fontSize="large"/>
                
                <form>
                    <input
                    value={input}
                    disabled={!channelId}
                    onChange={(e)=>{setInput(e.target.value)}}
                    placeholder={!channelId ? "Please Select a Channel first":`Message at ${channelName}`}/>
                    <button onClick={submitHandler}
                     className="chat__inputButton"
                     disabled = {!channelId}
                     type="submit"
                     >
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
