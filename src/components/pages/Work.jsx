import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { workData } from '../../data/workData';
import Navbar from '../UI/contactNavbar';

const MediaCarousel = ({ media }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextMedia = () => {
        setCurrentIndex((prev) => (prev + 1) % media.length);
    };

    const prevMedia = () => {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    };

    const isVideo = (url) => {
        return url.match(/\.(mp4|webm|ogg|mov|avi|mkv)$/i);
    };

    const isYouTube = (url) => {
        return url.includes('youtube.com') || url.includes('youtu.be');
    };

    const isVimeo = (url) => {
        return url.includes('vimeo.com');
    };

    const getYouTubeEmbedUrl = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
            const videoId = match[2];
            // Parameters for completely hidden controls
            const params = new URLSearchParams({
                autoplay: '1',          // Auto-play when visible
                mute: '1',              // Required for autoplay
                controls: '0',          // Hide all controls completely
                disablekb: '1',         // Disable keyboard controls
                fs: '0',                // Disable fullscreen button
                showinfo: '0',          // Hide video title and uploader
                rel: '0',               // Don't show related videos
                modestbranding: '1',    // Hide YouTube logo
                iv_load_policy: '3',    // Hide annotations
                cc_load_policy: '0',    // Hide closed captions
                playsinline: '1',       // Play inline on mobile
                loop: '1',              // Loop the video
                playlist: videoId,      // Required for loop to work
                enablejsapi: '0',       // Disable JavaScript API
                origin: window.location.origin, // Security parameter
                widget_referrer: window.location.origin
            });
            return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
        }
        return null;
    };

    const getVimeoEmbedUrl = (url) => {
        const regExp = /vimeo\.com\/(\d+)/;
        const match = url.match(regExp);
        return match ? `https://player.vimeo.com/video/${match[1]}` : null;
    };

    if (!media || media.length === 0) {
        return (
            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No media available</span>
            </div>
        );
    }

    const currentMedia = media[currentIndex];

    return (
        <div className="relative w-full h-80 rounded-lg overflow-hidden bg-gray-100">
            {isYouTube(currentMedia) ? (
                <div className="relative w-full h-full border-0">
                    <iframe
                        src={getYouTubeEmbedUrl(currentMedia)}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`YouTube video ${currentIndex + 1}`}
                    />
                </div>

            ) : isVimeo(currentMedia) ? (
                <iframe
                    src={getVimeoEmbedUrl(currentMedia)}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`Vimeo video ${currentIndex + 1}`}
                />
            ) : isVideo(currentMedia) ? (
                <video
                    src={currentMedia}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    onError={(e) => {
                        console.error('Video failed to load:', currentMedia);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                >
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img
                    src={currentMedia}
                    alt={`Project ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />
            )}

            {media.length > 1 && (
                <>
                    <button
                        onClick={prevMedia}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextMedia}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                    >
                        →
                    </button>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {media.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};


const WorkSection = ({ work, isLast }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="relative">
            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-8 top-12 w-px h-full bg-gray-300 z-0"></div>
            )}

            {/* Timeline dot */}
            <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full z-10 border-4 border-white shadow-lg"></div>

            {/* Work section content */}
            <div className="ml-16 mb-8">
                <div
                    className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={toggleExpanded}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            {/* Logo */}
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                {work.logo ? (
                                    <img src={work.logo} alt={`${work.company} logo`} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">
                                            {work.company ? work.company.charAt(0) : 'W'}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Title and Company */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {work.title || 'Position Title'}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {work.company || 'Company Name'} • {work.type}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div className="text-gray-400 ml-4">
                                {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                            </div>
                        </div>

                        {/* Date and Location */}
                        <div className="text-right text-sm text-gray-600">
                            <div className="flex items-center space-x-1 mb-1">
                                <Calendar size={14} />
                                <span>{work.startDate} - {work.endDate}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <MapPin size={14} />
                                <span>{work.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expanded content */}
                {isExpanded && (
                    <div className="mt-4 bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Image Carousel */}
                            <div>
                                <MediaCarousel media={work.images} />
                            </div>

                            {/* Role and Descriptions */}
                            <div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Role</h4>
                                    <p className="text-2xl text-gray-900 mb-10">{work.role || 'Role description not available'}</p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Responsibilities</h4>
                                    <ul className="space-y-2">
                                        {work.descriptions.map((desc, index) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex justify-center pt-2">
                                    <a
                                        href={work.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                                    >
                                        SEE MY WORK
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const WorkPage = () => {
    const { contact, work, services } = workData
    return (
        <div className="min-h-screen bg-gray-50 pr-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-lg text-gray-600 mb-2">I'm just getting started</p>
                    <h1 className="text-5xl text-gray-900 mb-2">Work Experience</h1>
                </div>
            </div>
            <div className="relative">
                {workData.work.map((work, index) => (
                    <WorkSection
                        key={index}
                        work={work}
                        isLast={index === workData.work.length - 1}
                    />
                ))}
                {/*
                Contact Me
            */}
                <div className="flex justify-center text-center items-center">
                    <div className="relative mx-6 my-12">
                        <div className="m-4 sm:m-6 md:m-8">
                            <div className="mb-4 sm:mb-5 md:mb-12">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 m-1 sm:m-2">{contact.title}</h1>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-1 sm:mb-2 px-2">{contact.heading}</p>
                            </div>
                            <div className="flex justify-center scale-75 sm:scale-90 md:scale-100">
                                <Navbar />

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkPage;