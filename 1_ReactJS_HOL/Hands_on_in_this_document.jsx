import React from 'react';

// Topic: JSX & Props
const GreetingCard = ({ name = "Developer", role = "React Enthusiast" }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h2>Hello, {name}!</h2>
            <p>Welcome to your React journey as a {role}.</p>
        </div>
    );
};

export default function App() {
    return (
        <div>
            <h1>Part 1: JSX & Props</h1>
            <GreetingCard name="Sagar" role="Frontend Engineer" />
        </div>
    );
}
