import React, { useState, useEffect } from "react";

function Messages({mode, uid}) {
    const [messages, setMessages] = useState([]);
    const [userid, setUserId] = useState(uid);

    useEffect(() => {
        fetchMessages();
        setUserId(uid);
    }, []);

    useEffect(() => {
        setMessages(sortJson(messages, mode));
    }, [userid]);

    /* const fetchMessages = async () => {
        //const url = "http://server?";
        const url = "messages.json";
         fetch(url, { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
           .then((response) => response.json())
           .then((result) => setMessages(result))
           .catch((err) => console.log(err.message));
    }; */

    const fetchMessages = async () => {
        const url = "messages.json";
        const response = await fetch(url, { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
        const json = await response.json();
        setMessages(() => sortJson(json, mode));
    }

    const sortJson = (json, mode) => {
        let newJson;
        if(mode === "all") {
            newJson = [...json];
            newJson.sort(date_sort);
        } else if(mode === "byUser") {
            newJson = json.filter(msg => {
                return msg.posted_by == userid;
            });
        }
        return newJson;
    };

    const li_messages = messages.map((message) => {
        return (
            <li key={message.id}>
                <p className="date">{message.date_posted} from {message.posted_by}</p>
                <p className="content">{message.text}</p>
                <img src={message.image} />
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