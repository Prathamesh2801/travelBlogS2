import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { imageGallery } from '../constants/images'

export default function Gallery() {
    return (
        <>
            <div className='container'>
                <ul class="nav nav-underline">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">International</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Domestic</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Exotic</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tropical</a>
                    </li>

                </ul>
            </div>
            <div style={{ padding: "50px" }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="20px">
                        {imageGallery.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                style={{ width: "100%", display: "block", borderRadius: "12px" }}
                                alt={`gallery-${i}`}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    )
}
