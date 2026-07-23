import React, { useState } from 'react';

// Topic: Conditional Rendering
const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Details" : "Show Details"}
            </button>
            
            {isVisible && (
                <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#f0f8ff' }}>
                    <h3>Secret Details</h3>
                    <p>Conditional rendering allows you to show or hide components based on state!</p>
                </div>
            )}
        </div>
    );
};

export default function App() {
    return (
        <div>
            <h1>Part 9: Conditional Rendering</h1>
            <ToggleMessage />
        </div>
    );
}
