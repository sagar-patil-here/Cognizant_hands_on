import React, { useState, useEffect } from 'react';

// Topic: Fetching Data from an API
export default function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchUser = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error("Failed to fetch user", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Part 13: Fetching Data (API)</h1>
            <button onClick={fetchUser} disabled={loading}>
                {loading ? "Loading..." : "Fetch User Data"}
            </button>
            
            {user && (
                <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #000' }}>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Company: {user.company.name}</p>
                </div>
            )}
        </div>
    );
}
