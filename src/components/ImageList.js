import React from 'react';

const ImageList = ({ images, loading, error }) => {
  if (loading) return <p className="p-5 text-center fs-4">Loading...</p>;
  if (error) return <p className="p-5 text-center text-danger fs-5">Error: {error}</p>;
  if (!images.length) return <p className="p-5 text-center fs-5">No images found</p>;

  return (
    <div className="container py-4">
      <div className="row g-4">
        {images.map((image) => (
          <div key={image.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 image-card">
              <a
                href={image.urls.regular}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="ratio ratio-4x3">
                  <img
                    src={image.urls.small}
                    alt={image.alt_description || 'Image'}
                    className="card-img-top object-fit-cover rounded-top"
                    loading="lazy"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                </div>
              </a>
              {image.alt_description && (
                <div className="card-body">
                  <p className="card-text text-muted small text-truncate mb-0">
                    {image.alt_description}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
