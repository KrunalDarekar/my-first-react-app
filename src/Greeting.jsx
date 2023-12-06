import { useState } from "react";

function Greeting() {

    const [value, setValue] = useState('')


    return (
        <div>
            <h1>Test title</h1>
            <ol className="test-list">
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ol>
            <svg>
                <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
            <form>
                <input 
                    type = "text" 
                    value = {value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <div>{value}</div>
        </div>
    )
}
export default Greeting;