import React from 'react'

function Loader() {
    return (
        <div className="loader absolute top-0 left-0 w-full h-screen bg-transparent z-50 flex justify-center items-center pointer-events-none">
            <span className="loader"></span>
        </div>
    )
}

export default Loader
