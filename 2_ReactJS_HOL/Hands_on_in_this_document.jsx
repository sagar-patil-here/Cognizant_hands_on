import React, { useState } from 'react';

// Topic: State Management with useState
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>Increment</button>
            <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default function App() {
    return (
        <div>
            <h1>Part 2: useState Hook</h1>
            <Counter />
        </div>
    );
}
