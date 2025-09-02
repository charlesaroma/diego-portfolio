import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All', icon: 'mdi:view-grid' },
    { id: 'performance', label: 'Performance', icon: 'mdi:microphone-variant' },
    { id: 'awards', label: 'Awards', icon: 'mdi:trophy-award' },
    { id: 'events', label: 'Events', icon: 'mdi:calendar-star' },
    { id: 'behind-scenes', label: 'Behind Scenes', icon: 'mdi:camera' }
  ];

  const galleryItems = [
    {
      id: 1,
      src: "https://ik.imagekit.io/ldeismm29/Diego-Portfolio/IMG_0368.JPEG?updatedAt=1756742011888",
      category: 'performance',
      title: 'Poetry Performance',
      description: 'Live poetry reading at cultural event',
      aspect: 'portrait'
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/ldeismm29/Diego-Portfolio/BG/IMG_0355.png?updatedAt=1756752208642",
      category: 'awards',
      title: 'APVA Award Ceremony',
      description: 'Best Spoken Word Video recognition',
      aspect: 'landscape'
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/ldeismm29/Diego-Portfolio/BG/IMG_7048.JPEG.jpg?updatedAt=1756752117608",
      category: 'events',
      title: 'Literary Festival',
      description: 'East African Poetic Battle participation',
      aspect: 'square'
    },
    {
      id: 4,
      src: "https://ik.imagekit.io/ldeismm29/Diego-Portfolio/BG/IMG_0388.png?updatedAt=1756752214427",
      category: 'behind-scenes',
      title: 'Studio Session',
      description: 'Recording session for Rebellion album',
      aspect: 'portrait'
    },
    {
      id: 5,
      src: "https://ik.imagekit.io/ldeismm29/Diego-Portfolio/IMG_0368.JPEG?updatedAt=1756742011888",
      category: 'performance',
      title: 'Stage Performance',
      description: 'Live theatrical performance',
      aspect: 'landscape'
    },
    {
      id: 6,
      src: "https://ik.imagekit.io/ldeismm29/Diego-Portfolio/BG/IMG_0355.png?updatedAt=1756752208642",
      category: 'events',
      title: 'Legal Conference',
      description: 'Entertainment law symposium',
      aspect: 'square'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getGridClass = (aspect) => {
    switch (aspect) {
      case 'portrait': return 'row-span-2';
      case 'landscape': return 'col-span-2';
      case 'square': return '';
      default: return '';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40'
                  : 'bg-gray-900/30 text-[#bcbcb8] border border-gray-700/30 hover:border-gray-600/50'
              }`}
            >
              <Icon icon={category.icon} className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[200px]"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${getGridClass(item.aspect)}`}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-[#e1e1dd] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#bcbcb8]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <Icon icon="mdi:close" className="w-6 h-6" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-xl font-semibold text-[#e1e1dd] mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-[#bcbcb8]">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;