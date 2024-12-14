import React from 'react'

export default function MovieList() {
    const movies = [
        {
          id: 1,
          name: "Inception",
          rating: 8.8,
          image: "/images/Inception.png",
          genres:["Action","Drama"],
        },
        {
          id: 2,
          name: "The Dark Knight",
          rating: 9.0,
          image: "/images/Dark.png",
          genres:["Action","Drama"],
        },
        {
          id: 3,
          name: "Interstellar",
          rating: 8.6,
          image: "/images/Interstellar.png",
          genres:["Action","Drama"],
        },
        {
          id: 4,
          name: "Titanic",
          rating: 7.8,
          image: "/images/titanic.png",
          genres:["Action","Drama"],
        },
      ];
  return (
    <div className="p-6 text-white min-h-screen mt-10">
        <h1 className="text-3xl font-bold text-center mb-6">Popular Movies</h1>
        {/* Responsive grid layout for movie cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Map through movies and create a card for each */}
          {movies.map((movie) => (
            <div
              key={movie.id}
              // Hover effects for interactive card
              className="relative group rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:z-10"
            >
              {/* Movie card container with styling */}
              <div className="relative bg-black text-white rounded-lg shadow-lg border-2 border-yellow-500 hover:border-yellow-400">
                {/* Movie poster image */}
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="w-full h-56 object-contain rounded-t-lg"
                />
                {/* Movie details section */}
                <div className="p-4">
                  {/* Movie title */}
                  <h2 className="text-lg font-semibold">{movie.name}</h2>
                  
                  {/* Movie rating */}
                  <p className="text-gray-400">Rating: {movie.rating}/10</p>
                  
                  {/* Genres display */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {movie.genres.map((genre, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs bg-gray-800 border border-gray-600 rounded-full"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  
                  {/* Add to Cart button */}
                  <div className="mt-4 flex justify-between items-center">
                    <button 
                      // Calls the addToCart function passed as a prop
                      onClick={() => addToCart(movie)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
