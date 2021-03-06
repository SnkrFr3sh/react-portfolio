import React, { useState } from 'react'

const CountButton = (props) => {

    console.log(props.incrementBy)
    const [currentCount, setCurrentCount] = useState(0)
    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    console.log("component re-rendered")

    return (
    <div>
    <button onClick={handleClick}>+{props.incrementBy}</button>
        <div>{currentCount}</div>

    </div>
    )
}

export default CountButton