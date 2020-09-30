import React from 'react';
import { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';

function SidebarChat({addNewChat}) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    //for pop up to come when u click add new chat
    const createChat = () => { 
        const roomName = prompt("Please enter the chat name!");
        if(roomName) {
            //do some clever stuff if they add room name
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
            <div className="sidebarChat__info">
                <h2> Room name </h2>
                <p></p>last message
            </div>
        </div>
    ): (
        <div onClick = {createChat}
        className="sidebarChat">
            <h2>Add new chat </h2>
        </div>
    )
    
} 


export default SidebarChat;
