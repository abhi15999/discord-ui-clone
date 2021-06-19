import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarChannel from './SidebarChannel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import { Avatar } from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import profilePic from './assets/profilePic.jpeg'
import {selectUser} from './features/userSlice'
import {useSelector} from 'react-redux'
import db, { auth } from './firebase'
// import {useEffect} from 'react'
function Sidebar() {

    const user = useSelector(selectUser);

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot=>{
            setChannels(snapshot.docs.map(doc=>({
                id:doc.id,
                channel:doc.data()
            })))
        })
    }, [])

    return (
        <div className = "sidebar">

            <div className="sidebar__top">
                <h3>Hello Sans!</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"/>
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                </div>
            </div>

            <div className="sidebar__voice">
                
                <SignalCellularAltIcon 
                className="sidebar__voiceIcon" 
                fontSize="large"/>
                
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected!</h3>
                    <p>Stream</p> 
                </div> 

                <div className="sidebar__voiceIcons">
                    <InfoIcon   
                    className="sidebar__infoIcon" 
                    />
                    <PhoneIcon 
                    className="sidebar__phoneIcon" 
                    />
                </div>
            
            </div>

            <div className="sidebar__profile">
                
                <Avatar onClick={()=>{
                    auth.signOut()
                }} src={user.photo} />

                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>

            </div>

        </div>
    )
}

export default Sidebar
