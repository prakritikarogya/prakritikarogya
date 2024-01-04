import React from 'react'
import BreadcrumbComponent from './component/Breadcrumb'
import Title from './component/Title'
import Header from './component/Header'

const about = () => {
    return (
       <div>
       <Header/>
         <div className='md:mx-10 mx-2 my-5'>
            <BreadcrumbComponent text={"About Us"} />
            <Title text={"About Us"} />
            <section className=" dark:bg-gray-900">
                <div className="grid  py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">A Nature Cure Oasis in Kutch</h1>
                        <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Spread over an area of about 18 acres & located in the serene and peaceful landscape of Vagad region of Kutch, Anandddham Nature Cure Center has been providing healthcare services for more than 15 years. Ananddham offers healthcare treatments through Naturopathy, Ayurveda, and Yoga.

                            Campus is very green and open with variety of Ayurvedic, Fruiting, and Forest tress.

                            Our staff is well trained and very courteous. We endeavour to make your stay here comfortable and memorable.

                            Our medical team is well qualified and very caring. Being a small center, we are able to provide customized care and personal attention.

                            You can read the opinion of people who visited before you in TESTIMONIALS.

                            and Download the literature from ACCOMMODATION section for detailed information about the center and the services.

                            Of course you can call, message, or email us. Details are there in CONTACT US</p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://www.ananddham.in/images/about-nature.webp" alt="mockup" />
                    </div>
                </div>
            </section>
        </div>
       </div>
    )
}

export default about