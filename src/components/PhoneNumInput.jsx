import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneNumInput = ({refs}) => {
    const [value, setValue] = useState()

    return (
        <>
            <PhoneInput

                inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true,
                    ref:refs,
                }}
                containerClass="border-[1px] border-gray-400 rounded-lg placeholder:text-sm "
                inputStyle={{
                    border:'none'
                }}
                placeholder="Enter phone number"
                value={value}
                country={'bd'}
                onChange={setValue}
                />
                {/* <h1>{value}</h1> */}
        </>
    )
}

export default PhoneNumInput