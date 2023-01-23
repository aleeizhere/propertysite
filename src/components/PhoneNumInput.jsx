import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'

const PhoneNumInput = () => {
    const [value, setValue] = useState()

    return (
        <div className='border border-gray-400 pl-3 p-2 w-full rounded-lg placeholder:text-sm'>
            <PhoneInput
                placeholder="Enter phone number"
                value={value}
                defaultCountry="BD"
                onChange={setValue} />
                <h1>{value}</h1>
                {value && isValidPhoneNumber(value) && (
                    <h1>VALID</h1>
                )}
        </div>
    )
}

export default PhoneNumInput