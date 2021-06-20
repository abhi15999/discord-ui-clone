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
import {selectUser} from './features/userSlice'
import {useSelector} from 'react-redux'
import db, { auth } from './firebase'
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

    const addChannelhandler = () => {
        const channelName = prompt("Name of the channel?");
        if(channelName){
            db.collection('channels').add({channelName:channelName});
        }
    }

    return (
        <div className = "sidebar">

            <div className="sidebar__top">
                <h3>Howdy! {user.displayName}</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel" onClick={addChannelhandler}/>
                </div>

                <div className="sidebar__channelsList">
                 {channels.map(({id,channel})=>{
                     return(

                         <SidebarChannel
                         key={id}
                         id={id}
                         channelName = {channel.channelName}
                         />
                     )
                 })}
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
                
                <Avatar style={{cursor:'pointer'}} onClick={()=>{
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
