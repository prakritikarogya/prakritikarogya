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
                    <div className="grid  py-4  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <p className='my-2 text-justify mr-5'>In this Naturopathy Hospital, new and old diseases are treated through naturopathy. Successful treatment of all diseases like diabetes, hypertension, cancer, sinus, sciatica, back pain, acidity, gas, arthritis, neck pain, slipped disc, obesity, indigestion, asthma, depression, constipation, venereal diseases, etc. through naturopathy without any surgery and operation.
                            </p>
                            <p>A special discount of 20% is given to helpless, disabled, and senior citizens.</p>
                            <p><span className='font-bold text-black'>Note : </span>Male and female specialists are available for medical services at this naturopathy center. The hospital is open every day and all the time.</p>
                            <p className='my-2 text-justify mr-5'>Rajgir is not only a historical place but also an international tourist destination. Amidst the picturesque valleys here, there is a natural sanatorium with natural resources, which is a voluntary organisation and has been functioning since 1964. Whose registration is registered under Societies Registration Act 21/1860. The founder of Prakriti Arogya Ashram is the late Dr. Anandi Prasad. This organisation treats patients using natural methods and does welfare work for children, old people, disabled people, sisters, etc. The medical system of the institution is famous in the country and abroad as well. From Shri Vinova Bhave to many eminent persons and people from India and abroad, many have been visiting this institution.</p>
                            <p className='my-2 text-justify mr-5'>In the Naturopathy system, treatment is done by understanding the nature of the body. It is believed that the body heals the disease itself; the work of medicine is only to support the body. There are various types of remedies in naturopathy, through which diseases can be cured quickly. Such as hip bath, hot foot bath, steam bath, enema (basti), sun bath, massage, mud therapy, Shirodhara, complete wet sheet wrap, magnetotherapy, sun ray therapy, Jal Neti, Kunjal Kriya, Sutra Neti, Yoga, Pranayama, etc. . Along with this, there is a source of hot water flowing from the valleys and mountains on the historical land of Rajgir, which is used for naturopathy.</p>
                            <p className='my-2 text-justify mr-5'>If you or any member of your family is suffering from any kind of mental or physical illness, is undergoing treatment, is taking medicine, and is not getting any relief, then you should come to our medical centre once. Meet a naturopathy doctor, share your problem, and get relief from the disease.</p>

                            <h1 className='font-bold sm:text-4xl text-xl'>Specialized Care</h1>
                            <p className='p-2'>Prakritk Arogyaaashram specializes in providing comprehensive care for a range of health concerns, including:</p>
                            <ul className='text-justify mr-5 py-2'>
                                <li className='list-disc'><span className='font-bold'>Cancer:</span> We understand the physical and emotional challenges that come with a cancer diagnosis. Our integrated approach focuses on not just treating the disease but supporting the overall well-being of the individual.</li>
                                <li className='list-disc'><span className='font-bold'>Diabetes:</span> Managing diabetes requires a multifaceted approach. Our team works closely with individuals to develop sustainable lifestyle changes and effective management strategies.</li>
                                <li className='list-disc'><span className='font-bold'>Back Pain: </span>Back pain can significantly impact daily life. Through a combination of therapeutic techniques and lifestyle adjustments, we aim to alleviate pain and improve overall spinal health.</li>
                                <li className='list-disc'><span className='font-bold'>Gas and Acidity:</span> Digestive issues can disrupt daily activities. Prakritk Arogyaaashram offers solutions to address gastrointestinal concerns and promote digestive wellness.</li>
                            </ul>
                            <h1 className='font-bold sm:text-4xl text-xl py-2'>Join Us on the Path to Wellness</h1>
                            <p>Whether you are seeking relief from a specific health issue or striving for overall well-being, Prakritk Arogyaaashram welcomes you with open arms. Explore our offerings, meet our dedicated team, and embark on a journey towards a healthier and more balanced life.</p>
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