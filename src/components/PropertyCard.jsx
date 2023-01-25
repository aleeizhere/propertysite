import React from 'react'
import property from '../assets/property.jpeg'
import styles from '../style'

const PropertyCard = ({ name, type, country, price, investors, annualReturn, fundedDate, CurrentValue }) => {
    return (
        <div class="sm:w-1/2 lg:w-[30%] mb-10 mx-2 bg-white rounded-xl">
            <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src={property} />
            </div>
            <div className='flex gap-2 pl-4 pt-2'>
                <h6 className='border rounded-sm p-1 text-xs'>{country}</h6>
                <h6 className='border rounded-sm p-1 text-xs'>{type}</h6>
            </div>
            <div className='flex justify-between px-4 mt-5'>
                <h1 className={`${styles.boldText} text-lightGreen`}>{price}</h1>
                <h1>{investors}</h1>
            </div>

            <div className='bg-gray-200 flex flex-col p-2 mx-4 mb-8 mt-4 rounded-lg'>
                <div className='flex justify-between'>
                    <h1 className="">Annualised Return</h1>
                    <h1 className='font-bold'>{annualReturn}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className="">Funded Date</h1>
                    <h1 className='font-bold'>{fundedDate}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className="">Current Valuation</h1>
                    <h1 className='font-bold'>{CurrentValue}</h1>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard