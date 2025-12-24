import React, { useState } from 'react';

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('*');

  const galleryItems = [
    { id: 1, image: '/img/gallery/image1.jpg', category: 'events', title: 'Music Festival' },
    { id: 2, image: '/img/gallery/image2.jpg', category: 'events', title: 'Dance Performance' },
    { id: 3, image: '/img/gallery/image3.jpg', category: 'workshops', title: 'Art Workshop' },
    { id: 4, image: '/img/gallery/image4.jpg', category: 'events', title: 'Theater Performance' },
    { id: 5, image: '/img/image1.jpg', category: 'events', title: 'Cultural Event' },
    { id: 6, image: '/img/image2.jpg', category: 'workshops', title: 'Music Workshop' },
    { id: 7, image: '/img/image3.jpg', category: 'events', title: 'Art Exhibition' },
    { id: 8, image: '/img/image4.jpg', category: 'events', title: 'Community Gathering' },
  ];

  const categories = [
    { id: '*', name: 'All' },
    { id: 'events', name: 'Events' },
    { id: 'workshops', name: 'Workshops' }
  ];

  const filteredItems = selectedCategory === '*' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Our Gallery</h1>
        </div>

        {/* Filter Buttons */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="btn-group" role="group">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`btn ${selectedCategory === cat.id ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="gallery-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={item.image} alt={item.title} />
                </div>
                <div className="text-center p-3 bg-light">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
