import React, { useEffect, useState } from 'react';

export default function FetchUsers () {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("http://localhost:3000/api/users") // Call backend API
                if(!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (e) {
                setError(e);
            } finally{
                setIsLoading(false);
            }
        } 
        fetchData();   
    }, []);

    if (error) {
        return <div>Something went wrong, try agan!</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Users</h2>
            {
                <ul>
                    {
                        users.map((user) => (
                            <li key={user.id}>{user.id}.  Name: {user.name} (Email: {user.email})</li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}