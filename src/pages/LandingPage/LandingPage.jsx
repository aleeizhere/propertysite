import React from 'react'
import Navbar from '../../components/Navbar'
import styles from '../../style';
import income from '../../assets/income.svg'
import value from '../../assets/value.svg'
import { UserOutlined } from '@ant-design/icons';
import property from "../../assets/property.jpeg"
import Footer from '../../components/Footer';



const data = [
    { number: "101K+", heading: "registered users" },
    { number: "100M+", heading: "in properties funded" },
    { number: "14", heading: "user nationalities" },
    { number: "2.8M+", heading: "rental income paid" },
]

const working = [
    { number: "01", heading: "Browse", desc: "Sign up in less than 3 minutes and browse our collection of properties" },
    { number: "02", heading: "Purchase", desc: "Buy a piece of the ones you love, starting from only AED 500" },
    { number: "03", heading: "Own", desc: "Sit back and track your income and investments online" },
    { number: "04", heading: "Exit", desc: "Hold, exit or resell your stake in a way that suits your financial goals" },
]


const workings = [
    { number: "01", heading: "Browse", desc: "Sign up in less than 3 minutes and browse our collection of properties" },
    { number: "02", heading: "Purchase", desc: "Buy a piece of the ones you love, starting from only AED 500" },
    { number: "03", heading: "Own", desc: "Sit back and track your income and investments online" },
]

const LandingPage = () => {
    return (

        <div className='w-full overflow-hidden bg-creamWhite'>

            {/* Navbar */}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            {/* hero component */}
            <div className='bg-hero-image w-full h-screen object-contain'>
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 ">
                    <h1 className='text-2xl w-screen md:w-fit p-5 md:p-0 md:text-6xl text-white text-center font-bold'>The modern way for anyone to invest in real estate</h1>
                    <h1 className='text-center text-white p-2 md:text-2xl font-thin mt-3   '>Digitally invest in prime rental properties, no matter where you are in the world!</h1>
                </div>
            </div>

            {/* website figures component */}
            <div className="flex justify-evenly flex-wrap gap-y-9 m-auto p-5 md:p-10 w-[90%] lg:w-[75%] mb-10 -my-16 shadow-xl rounded-lg bg-white">
                {
                    data?.map((d, i) => (
                        <div key={i} className="text-center font-medium text-xl">
                            <h1 className='text-3xl pb-2 font-bold'>{d.number}</h1>
                            <h1 className='text-sm'>{d.heading}</h1>
                        </div>
                    ))
                }

            </div>


            {/* How it works */}
            <div className='bg-white mt-16'>
                <div className='text-center p-2 pt-14'>
                    <h1 className='text-3xl md:text-5xl font-bold'>How it works</h1>
                    <h1 className='text-center p-2 md:text-2xl font-thin '>Stake is the key to unlocking your dream home</h1>
                </div>


                <div className={`${styles.boxWidth} m-auto flex justify-evenly p-5 md:p-10 mb-10 bg-white`}>
                    {
                        working.map((work, i) => (
                            <div key={i} className="font-medium text-xl">
                                <h1 className='text-3xl pb-2 font-bold bg-creamWhite p-2 rounded-lg w-fit'>{work.number}</h1>
                                <h1 className='text-xl pt-2 pb-2 font-bold'>{work.heading}</h1>
                                <h1 className='text-xs lg:text-sm'>{work.desc}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* How will you make money */}
            <div>
                <div className='text-center p-2 pt-14'>
                    <h1 className='text-3xl md:text-5xl font-bold'>So, how will you make money?</h1>
                    <h1 className='text-center p-2 md:text-2xl font-thin '>Stake was built to empower everyone to own and build wealth through real estate</h1>
                </div>

                <div className={`${styles.boxWidth} m-auto flex justify-evenly flex-col gap-y-4 md:flex-row items-center md:items-start gap-x-7 p-5 md:p-10 mb-10`}>
                    <div className="font-medium text-xl mt-20 bg-white p-5 h-fit rounded-lg w-full md:w-[30%] text-center md:text-start">
                        <img className='text-3xl pb-2 font-bold bg-creamWhite p-2 rounded-lg w-full h-24 md:h-auto md:w-fit ' src={income} />
                        <h1 className='text-2xl pt-2 pb-2 font-bold'>Monthly rental <br/> income</h1>
                        <h1 className='text-xs lg:text-sm'>earn the money and chill</h1>
                    </div>
                    <div className="flex flex-col bg-white">
                        <div class="rounded-lg h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src={property} />
                        </div>

                        <div className={`${styles.flexCenter} absolute p-2 bg-white rounded-r-lg gap-x-3 mt-2`}>
                            <UserOutlined />
                            <h1 className='text-2xl pb-2 font-bold'>rented</h1>

                        </div>
                        
                        <div className='p-5'>
                            <h1 className='text-2xl pb-2 font-bold'>1 Bed Room in spain</h1>
                            <div className='flex justify-between items-center bg-creamWhite p-4' >
                                <div>
                                    <h1 className='text-2xl pb-2 font-bold text-center'>9%</h1>
                                    <h1>gross yield</h1>
                                </div>
                                <div>
                                    <h1 className='text-2xl pb-2 font-bold text-center'>9%</h1>
                                    <h1>Capital appreciation</h1>
                                </div>
                                <div>
                                    <h1 className='text-2xl pb-2 font-bold text-center'>9%</h1>
                                    <h1>Total ROI</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="font-medium text-xl md:mt-20 bg-white p-5 h-fit rounded-lg w-full md:w-[30%] text-center md:text-start">
                        <img className='text-3xl pb-2 font-bold bg-creamWhite p-2 rounded-lg w-full h-24 md:h-auto md:w-fit ' src={value} />
                        <h1 className='text-2xl pt-2 pb-2 font-bold'>Monthly rental <br/> income</h1>
                        <h1 className='text-xs lg:text-sm'>earn the money and chill</h1>
                    </div>
                </div>



            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default LandingPage