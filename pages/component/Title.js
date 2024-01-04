import React from 'react'

const Title = ({ text }) => {
    return (
        <div>
            <h1 className='px-5 text-4xl font-bold mb-7 border-l-2 border-green-500'>{text}</h1>
        </div>
    )
}

export default Title