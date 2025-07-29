// import React from 'react';

// const ImageList = ({ images, loading, error }) => {
//   if (loading) return <p className="p-4 text-center">Loading...</p>;
//   if (error) return <p className="p-4 text-center text-danger">Error: {error}</p>;
//   if (!images.length) return <p className="p-4 text-center">No images found</p>;

//   return (
//     <div className="container">
//       <div className="row row-cols-1 row-cols-md-3 g-0">
//         {images.map((image) => (
//           <div key={image.id} className="col">
//             <a href={image.urls.regular} target="_blank" rel="noopener noreferrer">
//               <img src={image.urls.small} alt={image.alt_description} className="img-fluid rounded" />
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageList;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageList = ({ images, loading, error }) => {
  if (loading) return <p className="p-5 text-center fs-4">Loading...</p>;
  if (error) return <p className="p-5 text-center text-danger fs-5">Error: {error}</p>;
  if (!images.length) return <p className="p-5 text-center fs-5">No images found</p>;

  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {images.map((image) => (
          <div key={image.id} className="col">
            <div className="card h-100 shadow-sm border-0">
              <a
                href={image.urls.regular}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <img
                  src={image.urls.small}
                  alt={image.alt_description || 'Image'}
                  className="card-img-top img-fluid rounded-top"
                  loading="lazy"
                />
              </a>
              {image.alt_description && (
                <div className="card-body">
                  <p className="card-text text-muted small text-truncate">
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
