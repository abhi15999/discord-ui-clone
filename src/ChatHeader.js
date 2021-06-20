import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOffIcon from '@material-ui/icons/LocationOff';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';


function ChatHeader({channelName}) {
    // console.log("[ChatHeader] ",channelName)
    return (
        <div className="chatHeader">

            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    {channelName}
                </h3>
            </div>
            
            <div className="chatHeader__right">
                <NotificationsIcon/>
                <LocationOffIcon/>
                <GroupIcon/>
                <div className="chatHeader__searchBar">
                    <input placeholder="Search"/>
                    <SearchIcon/>
                </div>
                <SendIcon/>
                <HelpIcon/>
            </div>  
            
           

        </div>
    )
}

export default ChatHeader
