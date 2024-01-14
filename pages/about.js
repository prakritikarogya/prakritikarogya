import React from 'react'
import BreadcrumbComponent from './component/Breadcrumb'
import Title from './component/Title'
import Header from './component/Header'

const about = () => {
    return (
        <div>
            {/* <Header/> */}
            <div className='md:mx-10 mx-2 my-5'>
                <BreadcrumbComponent text={"About Us"} />
                <Title text={"About Us"} />
                <section className=" dark:bg-gray-900">
                    <div className="grid  py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">Welcome to Prakritk Arogya Aashram</h1>
                            <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg dark:text-gray-400 text-justify">At Prakritk Arogya Aashram, we are dedicated to fostering holistic well-being and providing compassionate care for individuals facing health challenges. Our mission is to empower individuals on their journey to recovery from various health issues, including cancer, diabetes, back pain, gas, acidity, and more.</p>
                            <h1 className='font-bold sm:text-4xl text-xl'>Our Vision</h1>
                            <p className='py-2 max-w-2xl mb-6  lg:mb-8 md:text-lg dark:text-gray-400 text-justify'>We envision a world where individuals can embrace a healthier and happier life by integrating traditional healing practices with modern medical approaches. Prakritk Arogya Aashram strives to be a beacon of hope, guiding individuals towards optimal health and vitality</p>
                            <h1 className='font-bold sm:text-4xl text-xl'>Holistic Healing Approach</h1>
                            <p className='py-2 max-w-2xl mb-6  lg:mb-8 md:text-lg dark:text-gray-400 text-justify'>We believe in the power of holistic healing, addressing the mind, body, and spirit. Our experienced team of healthcare professionals combines ancient wisdom with modern medical knowledge to create personalized wellness plans tailored to meet the unique needs of each individual</p>
                            <h1 className='font-bold sm:text-4xl text-xl'>Specialized Care</h1>
                            <p className='p-2'>Prakritk Arogya Aashram specializes in providing comprehensive care for a range of health concerns, including:</p>
                            <ul className='text-justify mr-5 py-2'>
                                <li className='list-disc'><span className='font-bold'>Cancer:</span> We understand the physical and emotional challenges that come with a cancer diagnosis. Our integrated approach focuses on not just treating the disease but supporting the overall well-being of the individual.</li>
                                <li className='list-disc'><span className='font-bold'>Diabetes:</span> Managing diabetes requires a multifaceted approach. Our team works closely with individuals to develop sustainable lifestyle changes and effective management strategies.</li>
                                <li className='list-disc'><span className='font-bold'>Back Pain: </span>Back pain can significantly impact daily life. Through a combination of therapeutic techniques and lifestyle adjustments, we aim to alleviate pain and improve overall spinal health.</li>
                                <li className='list-disc'><span className='font-bold'>Gas and Acidity:</span> Digestive issues can disrupt daily activities. Prakritk Arogya Aashram offers solutions to address gastrointestinal concerns and promote digestive wellness.</li>
                            </ul>
                            <h1 className='font-bold sm:text-4xl text-xl py-2'>Join Us on the Path to Wellness</h1>
                            <p>Whether you are seeking relief from a specific health issue or striving for overall well-being, Prakritk Arogya Aashram welcomes you with open arms. Explore our offerings, meet our dedicated team, and embark on a journey towards a healthier and more balanced life.</p>
                            <p className='p-4 font-black text-xs sm:text-2xl'>Contact us today to schedule a consultation and take the first step towards your well-being.</p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="https://www.ananddham.in/images/about-nature.webp" alt="mockup" className='h-1/2' />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default about