import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Error = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <h2>Page Not Found</h2>
            </div>
        </>

    )
}

export default Error
