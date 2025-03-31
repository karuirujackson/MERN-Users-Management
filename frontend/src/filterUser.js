import React, { useState, useEffect } from "react";

const BASE_URL = "http://localhost:5000/api/users";
let username = 'abcd';
let password = '1234';
const authToken = btoa(`${username}:${password}`);
 const requestAccess = {
    headers: {
        'authorization': `Basic ${authToken}`
    }
 }


export default function FetchPersons () {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("http://localhost:5000/api/users") // Call backend API
                if(!response.ok) {
                    throw new Error('Failed to fetch, try again!')
                }
                const data = await response.json();
                setUsers(data);
            } catch (e) {
                setError(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    if (error) {
        return <div>Something went wrong, try again later!</div>
    }

     // Filter users based on search input
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div>
            <h2>Users</h2>
            <input type="text"placeholder="Search User..." value={search} onChange={(e) => setSearch(e.target.value)} />
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {
                            filteredUsers.map((user) => (
                                <li>{user.name}</li>
                            ))
                        }
                    </ul>
                ) 
            }
        </div>
    )
}