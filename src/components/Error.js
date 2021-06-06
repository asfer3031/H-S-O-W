import React from 'react'
import './all.css'

const Error = ({ error }) => {
    return (
        <div className="error">
            { error }
        </div>
    )
}

export default Error