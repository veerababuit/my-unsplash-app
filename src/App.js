import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, per_page: 12 },
        headers: {
          Authorization: 'Client-ID YOUR_UNSPLASH_API_KEY'  // replace here API ,key
        }
      });
      setImages(response.data.results);
    } catch (err) {
      console.error('API Error:', err);
      setError('Failed to fetch images');
    }
    setLoading(false);
  };

  useEffect(() => {
    handleSearch('nature'); // Default search on load
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center py-4">Unsplash Image Search</h1>
      <SearchBar onSearch={handleSearch} />
      <ImageList images={images} loading={loading} error={error} />
    </div>
  );
};

export default App;