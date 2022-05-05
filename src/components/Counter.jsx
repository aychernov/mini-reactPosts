import React, {useState} from 'react';

const Counter = function () {

    const [count, setCount] = useState(0)

    function incr(){
        setCount(count + 1)
    }
    function decr(){
        setCount(count - 1)
    }

    return (
        <div>
        <h1>{count}</h1>
            <button onClick={incr}>Decr</button>
            <button onClick={decr}>Incr</button>
        </div>
    )
};

export default Counter;
