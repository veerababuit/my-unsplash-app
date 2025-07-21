import React from 'react';

const ImageList = ({ images, loading, error }) => {
  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;
  if (!images.length) return <p className="p-4">No images found</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="border rounded overflow-hidden">
          <a href={image.urls.regular} target="_blank" rel="noopener noreferrer">
            <img src={image.urls.small} alt={image.alt_description} className="w-full h-auto" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageList;