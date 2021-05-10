import React from 'react'

const ErrorMessage = () => {
    return <div style={{
        border: '2px solid red',
        padding: '40px',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '50%',
        margin: 'auto',
        backgroundColor: '#ffbaba'
    }}>
        <span>File format is not correct</span>
    </div>
}

export default ErrorMessage