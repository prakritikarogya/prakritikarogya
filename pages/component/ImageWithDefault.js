import React from 'react'
import Image from 'next/image'
const ImageWithDefault = ({ url, width, height, alt,nameclass }) => {
    return (
        <div>
            <Image
                src={url}
                width={width}
                height={height}
                alt={alt || 'prakriti Arogya'}
                title={alt || 'prakriti Arogya'}
                className={nameclass}
            />

        </div>
    )
}

export default ImageWithDefault