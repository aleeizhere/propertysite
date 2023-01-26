import React from 'react'
import property from '../assets/property.jpeg'
import PropertyCard from './PropertyCard'

const AvailableProperties = () => {
    return (
        <>
            <div className=" py-5 mx-auto">
                <div className="md:flex md:justify-center lg:justify-start items-center flex-wrap -mx-4 -mb-10">
                        <PropertyCard name="Studio in Dubai" country="Dubai"
                            type="Holiday" price="TAKA 736,393" investors="116 investors"
                            annualReturn="11.10%" fundedDate="12 Jan 2023" CurrentValue="TAKA 760,000" />
                        <PropertyCard name="1 Bed room in Burj Khalifa" country="Dubai" type="Holiday"
                            price="TAKA 736,393" investors="116 investors" annualReturn="11.10%" fundedDate="12 Jan 2023" CurrentValue="TAKA 760,000" />
                        <PropertyCard name="2 Bed room in Jumerah" country="Dubai" type="Holiday"
                            price="TAKA 736,393" investors="116 investors" annualReturn="11.10%" fundedDate="12 Jan 2023" CurrentValue="TAKA 760,000" />
                        <PropertyCard name="2 Bed room in Jumerah" country="Dubai" type="Holiday"
                            price="TAKA 736,393" investors="116 investors" annualReturn="11.10%" fundedDate="12 Jan 2023" CurrentValue="TAKA 760,000" />
                        <PropertyCard name="2 Bed room in Jumerah" country="Dubai" type="Holiday"
                            price="TAKA 736,393" investors="116 investors" annualReturn="11.10%" fundedDate="12 Jan 2023" CurrentValue="TAKA 760,000" />

                </div>
            </div>
        </>
    )
}

export default AvailableProperties