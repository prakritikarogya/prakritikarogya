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
                            <img className="h-80 max-w-full rounded-lg" src="https://yogvansham.com/uploads/gallery/Large/165528358762782076862a99f83482d2.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://www.ananddham.in/images/deluxe.webp" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://www.ananddham.in/images/facilities/facilities02.webp" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://navjivannaturecure.com/wp-content/uploads/2020/02/gallery-1-815x458.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://www.ananddham.in/images/facilities/facilities23.webp" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://www.ananddham.in/images/facilities/facilities26.webp" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://yogvansham.com/uploads/gallery/Large/165457361793466848629eca31af918.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://yogvansham.com/uploads/gallery/Large/165474437334913127162a16535128df.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-80 max-w-full rounded-lg" src="https://yogvansham.com/uploads/gallery/Large/1654744324161177485362a165047ff5a.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
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