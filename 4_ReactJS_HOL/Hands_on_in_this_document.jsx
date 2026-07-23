import React, { useState, useEffect } from 'react';

// Topic: Component Lifecycle with useEffect
const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // Cleanup function
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: '20px', border: '2px dashed blue', display: 'inline-block' }}>
            <h3>Timer running...</h3>
            <p>Seconds elapsed: {seconds}</p>
        </div>
    );
};

export default function App() {
    return (
        <div>
            <h1>Part 4: useEffect Hook</h1>
            <Timer />
        </div>
    );
}
