import { useState } from 'react'
import { CalendarOutlined, HomeOutlined, LineChartOutlined, MoneyCollectOutlined, UserOutlined } from '@ant-design/icons'
import { Divider, Slider } from 'antd'
import ImageSlider from "../../components/ImageSlider"
import styles from '../../style'

const homeDetails = [
    { icon: <UserOutlined />, heading: "Dubai, United Arab Emirates", desc: "A mature real estate market with a high return on investment" },
    { icon: <HomeOutlined />, heading: "Holiday home", desc: "Professionally managed short term rental for business travelers and families" },
    { icon: <MoneyCollectOutlined />, heading: "Average daily rate of 500 Taka", desc: "Monthly rental income will vary based on daily rate and occupancy levels" },
    { icon: <CalendarOutlined />, heading: "80% average occupancy rates", desc: "Daily rates and occupancy levels will vary by season" },
    { icon: <LineChartOutlined />, heading: "14.26% projected annual gross yield", desc: "With an expected net yield of 7.05% and a price per square foot of 2,057 TAKA " },


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
        <div>
            <h1 className={`${styles.boldText} text-lightGreen text-2xl mb-6`}>Portfolio {'>'} <span className='font-light text-base'> {"Property Name"} </span> </h1>
            <ImageSlider />

            <div className="flex flex-col-reverse md:flex-row">
                <div className="md:w-[65%] md:p-5 p-2">




                    {/* Left Div Content */}
                    <div>
                        <h1 className={`${styles.boldText} text-lightGreen font-bold md:text-3xl`}>Studio in Studio One - Dubai Marina</h1>
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
                                    <div className='flex justify-between '>
                                        <h1 className='font-thin'>Property Price</h1>
                                        <h1 className='font-semibold'>736,393 TAKA</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1 className='font-thin'>Transaction Cost</h1>
                                        <h1 className='font-semibold'>736,393 TAKA</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1 className='font-thin'>Stake fees</h1>
                                        <h1 className='font-semibold'>1.5%</h1>
                                    </div>
                                    <Divider />
                                    <div className='flex justify-between'>
                                        <h1 className='font-thin'>Invesment Cost</h1>
                                        <h1 className='font-semibold'>855,856 TAKA</h1>
                                    </div>

                                    <div className='flex justify-between mt-4'>
                                        <div className='bg-white p-3 rounded-lg text-center'>
                                            <h1 className='font-thin'>Value appreciation</h1>
                                            <h1 className='font-semibold'>30%</h1>
                                        </div>
                                        <div className='bg-white p-3 rounded-lg text-center '>
                                            <h1 className='font-thin'>Value appreciation</h1>
                                            <h1 className='font-semibold'>30%</h1>
                                        </div>
                                    </div>

                                </div>


                                <div className='w-1/2 text-lg'>
                                    <h1 className='font-bold'>Propery Cost</h1>
                                    <div className='flex justify-between '>
                                        <h1 className='font-thin'>Property Price</h1>
                                        <h1 className='font-semibold'>736,393 TAKA</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1 className='font-thin'>Transaction Cost</h1>
                                        <h1 className='font-semibold'>736,393 TAKA</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1 className='font-thin'>Stake fees</h1>
                                        <h1 className='font-semibold'>1.5%</h1>
                                    </div>
                                    <Divider />
                                    <div className='flex justify-between'>
                                        <h1 className='font-thin'>Invesment Cost</h1>
                                        <h1 className='font-semibold'>855,856 TAKA</h1>
                                    </div>

                                    <div className='flex justify-between mt-4'>
                                        <div className='bg-white p-3 rounded-lg text-center'>
                                            <h1 className='font-thin'>Value appreciation</h1>
                                            <h1 className='font-semibold'>30%</h1>
                                        </div>
                                        <div className='bg-white p-3 rounded-lg text-center '>
                                            <h1 className='font-thin'>Value appreciation</h1>
                                            <h1 className='font-semibold'>30%</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>


                    </div>


                </div>






                <div className="w-full md:w-[35%] md:h-64 p-2 md:p-5 md:sticky md:top-0">
                    {/* Right Div Content */}
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo consequatur laudantium eligendi veniam, tenetur libero dicta facere dolore rerum ipsam excepturi voluptatibus id fugit sed veritatis, nostrum sunt voluptas quia?</h1>
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo consequatur laudantium eligendi veniam, tenetur libero dicta facere dolore rerum ipsam excepturi voluptatibus id fugit sed veritatis, nostrum sunt voluptas quia?</h1>
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo consequatur laudantium eligendi veniam, tenetur libero dicta facere dolore rerum ipsam excepturi voluptatibus id fugit sed veritatis, nostrum sunt voluptas quia?</h1>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetailsTab