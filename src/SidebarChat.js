import React from 'react';
import { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';
import db from "./firebase";
import { Link } from "react-router-dom";

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");
    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) =>
                doc.data()))
            );
        }
    }, [id]);
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    //for pop up to come when u click add new chat
    const createChat = () => { 
        const roomName = prompt("Please enter chat room name!");
        if(roomName) {
            //do some clever stuff if they add room name
            db.collection('rooms').add({
                name: roomName,
            });
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>

        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    ): (
        <div onClick = {createChat}
        className="sidebarChat">
            <h2>Add new chat </h2>
        </div>
    )
    
} 


export default SidebarChat;
