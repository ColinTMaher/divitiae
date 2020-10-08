import React from "react"

function Aside() {
    return (
        <aside className="aside">
            <div className="close-icon">
                <strong>&times;</strong>
            </div>
            <ul className="list">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
                <li className="item">Item 5</li>
            </ul>
        </aside>
    )
}

export default Aside