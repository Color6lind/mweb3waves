import React from 'react'

function App() {

    return (
        <div className="container">
            <input className="btn btn-primary"
                   type="submit"
                   value="Alert"
                   onClick={() => {
                       alert("Alert button onClick");
                   }}
            />
        </div>
    )
}

export default App
