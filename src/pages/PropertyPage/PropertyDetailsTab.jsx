import { useState } from 'react'
import { CalendarOutlined, CloseCircleOutlined, HomeOutlined, InfoOutlined, LineChartOutlined, MoneyCollectOutlined, UserOutlined } from '@ant-design/icons'
import { Divider, Steps, Progress } from 'antd'
import dumbbell from "../../assets/dumbbell.svg"
import pool from "../../assets/pool.svg"
import ImageSlider from "../../components/ImageSlider"
import styles from '../../style'

const homeDetails = [
    { icon: <UserOutlined />, heading: "Dubai, United Arab Emirates", desc: "A mature real estate market with a high return on investment" },
    { icon: <HomeOutlined />, heading: "Holiday home", desc: "Professionally managed short term rental for business travelers and families" },
    { icon: <MoneyCollectOutlined />, heading: "Average daily rate of 500 Taka", desc: "Monthly rental income will vary based on daily rate and occupancy levels" },
    { icon: <CalendarOutlined />, heading: "80% average occupancy rates", desc: "Daily rates and occupancy levels will vary by season" },
    { icon: <LineChartOutlined />, heading: "14.26% projected annual gross yield", desc: "With an expected net yield of 7.05% and a price per square foot of 2,057 TAKA " },
]
const priceDetails = [
    { heading: "Property Price", price: "736,154 TAKA" },
    { heading: "Transaction Cost", price: "736,154" },
    { heading: "Stake fees", price: "1.5%" },
]

const valueAppreciation = [
    { heading: "Value appreciation", percent: "30%" },
    { heading: "Value appreciation", percent: "30%" },

]
const PropertyDetailsTab = () => {
    let propertyDesc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis ratione id! Dolore voluptates neque similique ullam! Voluptatem beatae aliquam labore magni quibusdam expedita consectetur dolores corporis pariatur. Debitis, hic!
    Perspiciatis deserunt quidem quae molestiae cumque, sunt at molestias distinctio, fugiat quis qui. Voluptatum illo incidunt excepturi optio qui commodi eaque id eveniet vitae, labore, eligendi ducimus. Laudantium, quaerat repellendus!
    Dolore esse sequi voluptates praesentium, animi natus, ex veritatis laborum aspernatur pariatur dolorum nesciunt sit id illum repudiandae suscipit? Pariatur, numquam omnis ab deleniti nesciunt velit iusto itaque quas ipsam!
    Aspernatur perspiciatis aliquid dolor ad saepe repudiandae unde suscipit exercitationem quasi ducimus, recusandae nemo velit neque consequuntur! Asperiores rerum et culpa illo! Optio recusandae ratione doloremque tempore quisquam, modi nulla.
    Minima, similique eligendi! Exercitationem laudantium dignissimos mollitia, aperiam praesentium facilis eum nemo minima. Laudantium repudiandae laboriosam dolores praesentium voluptatum aut placeat tempore, eius temporibus fuga sapiente corrupti at saepe consequuntur!
    Fugit explicabo quasi quas ea, consequatur placeat eveniet voluptatum quibusdam iure cum quos, sed voluptatem nisi iste! Eaque architecto consequuntur error quisquam ex totam iure commodi laudantium est nihil? Veniam.
    Assumenda, cupiditate quas autem modi ad fugit fuga vero, saepe, dolores eius quia animi alias! Sapiente dolorem fugit quam eius consequatur aperiam, id nobis non inventore quo unde officia repellat.
    Voluptatibus velit, cumque neque quia fuga exercitationem suscipit eaque itaque laborum vitae! Eum, ut ad praesentium, excepturi tempora cumque ipsum est error, dolores earum totam quam. Facilis amet iste maxime.
    Nulla aperiam quas facere rem earum modi dolorum quisquam quaerat reiciendis, laborum sint explicabo at sequi. Expedita illum numquam magnam deserunt quibusdam? Nostrum enim laboriosam eaque sunt placeat sequi eos.
    Perferendis deleniti hic at dolore accusamus. Distinctio qui sit ab minima totam et dicta, corporis laudantium, corrupti impedit consequuntur eligendi itaque ipsa. Rerum tempora inventore autem dolores laudantium consectetur assumenda?`;

    const [text, setText] = useState(propertyDesc.slice(0, 400))
    const [readMore, setReadMore] = useState(false);


    const showMore = () => {
        if (!readMore) {
            setText(propertyDesc);
            setReadMore(true)
        } else {
            setText(propertyDesc.slice(0, 400));
            setReadMore(false);
        }
    }


    return (
        <div className=''>
            <h1 className={`${styles.boldText} text-lightGreen text-2xl mb-6`}>Portfolio {'>'} <span className='font-light text-base'> {"Property Name"} </span> </h1>
            <ImageSlider />

            <div className="flex flex-col-reverse md:flex-row">
                <div className="md:w-[65%] md:p-5 p-2">

                    {/* Left Div Content */}
                    <div className='pr-5'>
                        <h1 className={`${styles.boldText} text-lightGreen font-bold md:text-3xl mt-8`}>Studio in Studio One - Dubai Marina</h1>
                        <h1 className='text-xs md:text-sm'>1 bath <span> <Divider type='vertical' className='border-black' /> </span> Studio <span> <Divider className='border-black' type='vertical' /> </span> 358 sq.ft <span> <Divider className='border-black' type='vertical' /> </span> Dubai Marina</h1>

                        <Divider className='border-black' />

                        <div>

                            {/* section one */}
                            <div className='flex flex-col gap-y-4'>
                                {
                                    homeDetails.map((detail, i) => (
                                        <div className="flex gap-x-6">
                                            <div key={i} className='p-3 text-2xl rounded-[100%] flex items-center h-11 w-10'>
                                                {detail.icon}
                                            </div>
                                            <div>
                                                <h1 className='font-bold text-lg'>{detail.heading}</h1>
                                                <p className='text-sm font-light'>{detail.desc}</p>
                                            </div>
                                        </div>

                                    ))
                                }

                            </div>


                            {/* Property Overview*/}
                            <h1 className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pt-12 pb-5`}>Property Overview</h1>
                            <div>
                                <p>{text}  {!readMore && '...'}</p>
                                <p onClick={showMore} className="font-bold text-lightGreen cursor-pointer"> {readMore ? 'Show Less' : " Read More"}</p>
                            </div>
                            {/* Financial Details */}
                            <h1 className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pt-12 pb-5`}>Financial Details</h1>

                            <div className='flex justify-between gap-x-5'>
                                <div className='w-1/2 text-lg'>
                                    <h1 className='font-bold'>Propery Cost</h1>
                                    {priceDetails.map((detail, i) => (
                                        <div className='flex justify-between'>
                                            <h1 className='font-thin'>{detail.heading}</h1>
                                            <h1 className='font-semibold'>{detail.price}</h1>
                                        </div>
                                    ))}
                                    <Divider />
                                    <div className='flex justify-between'>
                                        <h1 className='font-thin'>Invesment Cost</h1>
                                        <h1 className='font-semibold'>855,856 TAKA</h1>
                                    </div>

                                    <div className='flex flex-wrap lg:flex-nowrap gap-y-3 justify-between mt-4'>
                                        {valueAppreciation.map((value, i) => (
                                            <div key={i} className='bg-white p-3 rounded-lg text-center'>
                                                <h1 className='font-thin'>{value.heading}</h1>
                                                <h1 className='font-semibold'>{value.percent}</h1>
                                            </div>
                                        ))}
                                    </div>

                                </div>


                                <div className='w-1/2 text-lg'>
                                    <h1 className='font-bold'>Propery Cost</h1>
                                    {priceDetails.map((detail, i) => (
                                        <div className='flex justify-between'>
                                            <h1 className='font-thin'>{detail.heading}</h1>
                                            <h1 className='font-semibold'>{detail.price}</h1>
                                        </div>
                                    ))}
                                    <Divider />
                                    <div className='flex justify-between'>
                                        <h1 className='font-thin'>Invesment Cost</h1>
                                        <h1 className='font-semibold'>855,856 TAKA</h1>
                                    </div>

                                    <div className='flex flex-wrap gap-y-3 lg:flex-nowrap justify-between mt-4'>
                                        {valueAppreciation.map((value, i) => (
                                            <div key={i} className='bg-white p-3 rounded-lg text-center'>
                                                <h1 className='font-thin'>{value.heading}</h1>
                                                <h1 className='font-semibold'>{value.percent}</h1>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <h1 className='text-base pt-5 font-thin'>Projections based on a 5 year holding period. You can view the Investment Memorandum in the Documentation section for a full financial breakdown</h1>


                            {/* Funnding TimeLine */}
                            <h1 className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pt-12 pb-5`}>Funding Timeline</h1>

                            {/* Steps */}
                            <Steps
                                progressDot
                                current={2}
                                direction="vertical"
                                size='default'
                                className='font-bold'
                                items={[
                                    {
                                        title: 'January 12th, 2023',
                                        description: "Closing Date"
                                    },
                                    {
                                        title: 'February 2nd, 2023',
                                        description: 'SPV created and title deeds distributed',
                                    },
                                    {
                                        title: 'February 9th, 2023',
                                        description: 'DTCM application approved',
                                    },
                                    {
                                        title: 'February 9th, 2023',
                                        description: 'Handover to property manager',
                                    },
                                    {
                                        title: 'April 27th, 2023',
                                        description: 'Expected first rental payment',
                                    },
                                ]}
                            />


                            <h1 className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pt-12 pb-5`}>Location</h1>
                            <div>
                                <h1 className='flex items-center gap-x-2 font-bold text-lg'> <span className='bg-white rounded-[100%] p-2'> <InfoOutlined /> </span> Dubai Marina, Dubai United Arab Emirates </h1>
                                <h1 className='text-base pt-5 font-thin'>Dubai Marina is one of the premier neighbourhoods in Dubai. This impressive community boasts luxury skyscrapers, a range of dining and entertainment options and urban waterfront living to its residents. It is the most popular area for renting luxury apartments in Dubai.</h1>
                            </div>

                            <h1 className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pt-12 pb-5`}>Amenities</h1>
                            <div className='flex justify-between md:w-64'>
                                <div className='flex gap-x-4 items-center'>
                                    <img src={dumbbell} alt="" />
                                    <h1>Gym</h1>
                                </div>
                                <div className='flex gap-x-4 items-center'>
                                    <img src={pool} alt="" />
                                    <h1>Pool</h1>
                                </div>
                            </div>

                        </div>


                    </div>


                </div>






                <div className="w-full md:w-[35%] md:h-fit p-2 md:p-5 md:sticky md:top-6 mt-8 bg-white rounded-lg">

                        <h1 className={`${styles.boldText} md:text-xl text-center`}>Property Price</h1>
                        <h1 className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pb-5 text-center mt-2`}>736,295 TAKA</h1>
                        <Progress showInfo={false} percent={100} strokeColor="#4673B8" />
                        <h1 className={`${styles.boldText} text-sm pb-5 `}>100% funded</h1>
                        <div className='flex justify-between'>
                            <h1 className={`${styles.boldText} text-sm`}> 111 Investors </h1>
                            <h1 className='text-red-500 flex items-center gap-x-2'> {<CloseCircleOutlined />} Closed on 12 Jan 2023</h1>
                        </div>
                        <div className='bg-creamWhite p-3 rounded-lg mt-4'>
                            <h1 className='font-bold'>Propery Cost</h1>
                            {priceDetails.map((detail, i) => (
                                <div className='flex justify-between py-2'>
                                    <h1 className='font-thin'>{detail.heading}</h1>
                                    <h1 className='font-semibold'>{detail.price}</h1>
                                </div>
                            ))}
                        </div>
                        
                </div>

            </div>
        </div>
    )
}

export default PropertyDetailsTab