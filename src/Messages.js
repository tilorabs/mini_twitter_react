import React, { useState, useEffect } from "react";

function Messages({uid}) {
    const [messages, setMessages] = useState([]);
    let userid = parseInt(uid);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const url = "messages.json";
        const response = await fetch(url, { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
        const json = await response.json();
        setMessages(() => sortMessages(json));
    }

    const sortMessages = (json) => {
        let newMessages = [...json];
        newMessages.sort(date_sort);
        return newMessages;
    };

    const li_messages = messages.map((message) => {
        const mdate = new Date(message.date_posted).toLocaleDateString();
        let msguserid = parseInt(message.posted_by);
        if(userid > 0 && userid !== msguserid)
            return;
        return (
            <li key={message.id}>
                <p className="date">{mdate} from {message.posted_by}</p>
                <p className="content">{message.text}</p>
                <img src={message.image} alt={mdate} />
            </li>
        );
    });

    function date_sort(a, b) {
        return new Date(b.date_posted).getTime() - new Date(a.date_posted).getTime();
    }

    return(
        <ul className="messages">{messages.length > 0 && li_messages}</ul>
    )
}

export default Messages;