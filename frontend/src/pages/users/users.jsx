import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await axios.get("http://localhost:3001/users/alluser", {withCredentials: true});
            console.log(data);
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.us_id}>
                    <h1>{user.us_name}</h1>
                    <p>{user.us_gender}</p>
                    <p>{user.us_age}</p>
                </div>
            ))}
        </div>
    );
}

export default Users;