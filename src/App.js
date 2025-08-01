import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/global.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query, per_page: 12 },
          headers: {
            Authorization:
              "Client-ID kLOSXZscnYNqpa9VsOsPVHzhdcQ0xGxC5JvLmPvcHXg",
          },
        }
      );
      setImages(response.data.results || []);
    } catch (err) {
      console.error(
        "API Error:",
        err.response ? err.response.data : err.message
      );
      setError("Failed to fetch images. Check console for details.");
    }
    setLoading(false);
  };

  useEffect(() => {
    handleSearch("nature");
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <header className="header-section text-white text-center">
        <div className="container py-3">
          <h1 className="display-5 fw-bold mb-2">Unsplash Image Search</h1>
          <p className="lead mb-0">
            Discover stunning photos from the world’s best photographers
          </p>
        </div>
      </header>
      <SearchBar onSearch={handleSearch} />
      <ImageList images={images} loading={loading} error={error} />
    </div>
  );
};

export default App;
