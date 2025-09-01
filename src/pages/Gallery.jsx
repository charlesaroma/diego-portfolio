import React from 'react'
import GalleryHero from '../components/gallery/galleryHero'
import GallerySection from '../components/gallery/gallerySection'

const Gallery = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <GalleryHero />
        <GallerySection />
    </div>
  )
}

export default Gallery