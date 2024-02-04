import React from 'react'
import BreadcrumbComponent from './component/Breadcrumb'
import Title from './component/Title'
import Header from './component/Header'

const doctor = () => {
    return (
        <div>
            <div className='md:mx-10 mx-2 my-5'>
                <BreadcrumbComponent text={"Doctor Team"} />
                <Title text={"Our Doctor Team"} />
                <section className="dark:bg-gray-900">
                    <div className="py-8 lg:py-16 lg:px-6 ">
                        <div className="grid gap-4 mb-6 lg:mb-8 md:grid-cols-2">
                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="sm:w-64 w-80 px-4 rounded-lg sm:rounded-none sm:rounded-l-lg" src="/doctor.jpg" alt="Bonnie Avatar" />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Dr. Bhuvnesh Agarwal</a>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">CMO, BNYS</span><br />
                                    <span>
                                    Dr. Bhuvnesh Agarwal is a specialist with expertise in diabetes, hypertension, arthritis, and a focus on Chronic Kidney Disease (CKD).
                                    </span>
                                </div>
                            </div>
                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                <img className="sm:w-72 w-80 p-4 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://dols.org.in/wp-content/uploads/2023/01/3774299.png" alt="Bonnie Avatar" />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Dr. Ramparvesh Das</a>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">ND</span><br />
                                    <span>
                                    Dr. Ramparvesh Das is a highly experienced practitioner with over 30 years of expertise in the field of Pratik Chikitsya, specializing in Gastrointestinal Diseases.
                                    </span>
                                </div>
                            </div>
                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="sm:w-36 w-80 p-4 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://dols.org.in/wp-content/uploads/2023/01/3774299.png" alt="Bonnie Avatar" />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Dr. Moriyanas Baruah</a>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">Member of International Naturopathy Organisation (INO), Jharkhand</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default doctor