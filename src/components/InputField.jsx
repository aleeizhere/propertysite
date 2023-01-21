import React from 'react'

const InputField = ({type, placeholder}) => {
    return (
        <div>
            <input
            className='border-[1px] border-gray-400 pl-3 p-2 w-full rounded-lg placeholder:text-sm focus:outline-none focus:border-lightGreen' 
            type={type}
            placeholder={placeholder}
            />
        </div>
    )
}

export default InputField