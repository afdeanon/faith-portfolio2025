import React, { useState, useEffect } from 'react';
import { profileData } from '../../data/profileData';
//Add a title above the description
const CurrentUpdatesCarousel = () => {
    const { currentUpdates } = profileData;
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === currentUpdates.length - 1 ? 0 : prevIndex + 1
            );
        }, 10000);

        return () => clearInterval(interval);
    }, [currentUpdates.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const currentUpdate = currentUpdates[currentIndex];

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image Container */}
            <div className="relative h-80 bg-gray-200 flex items-center justify-center">
                <img
                    src={currentUpdate.image}
                    alt={`Update ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="p-6">
                {/* Description */}
                <div className="h-40 mb-6 overflow-y-auto">
                    {/*Title*/}
                    <div>
                        <h3 className='text-2xl text-bold'>
                            {currentUpdate.title}
                        </h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mt-2">
                        {currentUpdate.description}
                    </p>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mb-3">
                    {currentUpdates.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-blue-500 scale-110'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to update ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Link Button */}
                <div className="text-center">
                    <a
                        href={currentUpdate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors duration-200"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="h-1 bg-gray-200">
                <div
                    className="h-full bg-blue-500 transition-all duration-5000 ease-linear"
                    style={{
                        width: `${((currentIndex + 1) / currentUpdates.length) * 100}%`
                    }}
                />
            </div>
        </div>
    );
};

export default CurrentUpdatesCarousel;