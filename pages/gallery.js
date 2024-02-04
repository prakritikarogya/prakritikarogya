import React from 'react'
import BreadcrumbComponent from './component/Breadcrumb'
import Title from './component/Title'
import Header from './component/Header'

const Gallery = () => {
    return (
        <div>
            {/* <Header /> */}
            <div className='md:mx-10 mx-2 my-5'>
                <BreadcrumbComponent text={"Gallery"} />
                <Title text={"Our Gallery"} />
                <div className="sm:grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="/gallery/g1.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="/gallery/g2.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="/gallery/g3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4 sm:mb-0 mb-5 sm:mt-0 mt-5">
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="/gallery/g4.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="/gallery/g5.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="/gallery/g6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4 sm:mb-0 mb-5 sm:mt-0 mt-5">
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="/gallery/g7.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="/gallery/g8.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://yogvansham.com/uploads/gallery/Large/1654744324161177485362a165047ff5a.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4 sm:mb-0 mb-5 sm:mt-0 mt-5">
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://navjivannaturecure.com/wp-content/uploads/2020/02/gallery-23-1024x724.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://navjivannaturecure.com/wp-content/uploads/2020/02/gallery-10-815x458.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://navjivannaturecure.com/wp-content/uploads/2020/02/gallery-6-1024x724.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery