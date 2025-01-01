import React, { useRef, useEffect, useState } from 'react';

const UseRef = () => {
    const [text, setText] = useState("");
    const prevText = useRef();

    useEffect(() => {
        prevText.current = text;
    }, [text]);

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>Current Text: {text}</p>
            <p>Previous Text: {prevText.current}</p>
        </div>
    );
};

export default UseRef;
