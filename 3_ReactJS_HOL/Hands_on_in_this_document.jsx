import React, { useState } from 'react';

// Topic: Handling Forms & Events
const SimpleForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue("");
    };

    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your favorite technology:
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </label>
                <button type="submit" style={{ marginLeft: '10px', padding: '5px 10px' }}>Submit</button>
            </form>
            {submittedValue && <p>You submitted: <strong>{submittedValue}</strong></p>}
        </div>
    );
};

export default function App() {
    return (
        <div>
            <h1>Part 3: Forms and Events</h1>
            <SimpleForm />
        </div>
    );
}
