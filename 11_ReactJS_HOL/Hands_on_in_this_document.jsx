import React, { useState, useEffect } from 'react';

// Topic: Custom Hooks
// A custom hook to track window dimensions
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

export default function App() {
    const { width, height } = useWindowSize();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Part 11: Custom Hooks</h1>
            <p>Resize the browser window to see the hook in action.</p>
            <div style={{ padding: '20px', background: '#d3f8e2', display: 'inline-block' }}>
                <strong>Current Window Size:</strong>
                <p>Width: {width}px</p>
                <p>Height: {height}px</p>
            </div>
        </div>
    );
}
