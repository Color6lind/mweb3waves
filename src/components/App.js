import React from 'react'

function App() {
    const authFunc = () => {
        const authData = { data: "Auth on my site" };
        if (WavesKeeper) {
            WavesKeeper.auth( authData )
                .then(auth => {
                    console.log( auth );
                }).catch(error => {
                console.error( error );
            })
        } else {
            alert("To Auth WavesKeeper should be installed.");
        }
    }
    return (
        <div className="container">
            <input className="btn btn-primary"
                   type="submit"
                   value="Auth"
                   onClick={authFunc}
            />
        </div>
    )
}

export default App
