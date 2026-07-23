import React, { useReducer } from 'react';

// Topic: Complex State Management with useReducer
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error();
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Part 12: useReducer Hook</h1>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })} style={{ margin: '0 10px' }}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
}
