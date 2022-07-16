import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Users({mode, uid}) {
    const [users, setUsers] = useState([]);
    let userid = parseInt(uid);

    useEffect(() => {
        fetchUsers();
    }, []);
    
    const fetchUsers = async () => {
        //const url = "https://hackathon-backend-007.herokuapp.com/users";
        const url = "users.json";
          fetch(url, { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
            .then((response) => response.json())
            .then((result) => setUsers(result))
            .catch((err) => console.log(err.message));
    };

    const li_users = users.map((user) => {
        const user_to = "/users/" + user.id;
        if(userid === user.id) {
            return (
                <li className="li_extended" key={user.id}>
                    <NavLink className="link" to={user_to}>
                        <img className="big" src={user.avatar} />
                        <span>{user.username}</span>
                    </NavLink>
                    <p>Joining date: {user.date_joined}</p>
                </li>
            );
        }
        
        return (
            <li key={user.id}>
                <NavLink className="link" to={user_to}>
                    <img src={user.avatar} />
                    <span>{user.username}</span>
                </NavLink>
            </li>
        );
    });

    return(
        <ul className="users">{users.length > 0 && li_users}</ul>
    )
}

export default Users;