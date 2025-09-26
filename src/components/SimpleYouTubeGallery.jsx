import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// VideoThumbnail component with better error handling
const VideoThumbnail = ({ videoId, title, className }) => {
  const [imgSrc, setImgSrc] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [attempted, setAttempted] = useState([]);

  // Array of thumbnail URLs to try
  const thumbnailUrls = [
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/default.jpg`,
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
  ];

  useEffect(() => {
    // Start with the first URL
    setImgSrc(thumbnailUrls[0]);
    console.log(`Starting thumbnail load for: ${title} with URL: ${thumbnailUrls[0]}`);
  }, [videoId]);

  const handleImageLoad = () => {
    console.log(`✅ Thumbnail loaded successfully: ${title} with ${imgSrc}`);
    setImageLoaded(true);
    setShowPlaceholder(false);
  };

  const handleImageError = () => {
    const currentIndex = thumbnailUrls.indexOf(imgSrc);
    console.error(`❌ Thumbnail failed: ${imgSrc} for ${title} (attempt ${currentIndex + 1})`);
    
    // Try next URL in sequence
    if (currentIndex < thumbnailUrls.length - 1) {
      const nextUrl = thumbnailUrls[currentIndex + 1];
      console.log(`Trying next URL: ${nextUrl}`);
      setImgSrc(nextUrl);
      setAttempted([...attempted, imgSrc]);
    } else {
      console.log('All thumbnail URLs failed, showing placeholder');
      setShowPlaceholder(true);
    }
  };

  if (showPlaceholder) {
    return (
      <div className={`${className} bg-gradient-to-br from-red-100 to-red-200 flex flex-col items-center justify-center`}>
        <div className="bg-red-600 text-white p-4 rounded-full mb-3 shadow-lg">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
        <p className="text-red-700 font-bold text-sm text-center px-2">YouTube Video</p>
        <p className="text-red-600 text-xs text-center px-2 mt-1 font-medium">
          {title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </p>
        <div className="mt-2 px-3 py-1 bg-red-600 text-white text-xs rounded-full">
          Click to Play
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Simple fallback image that should always work */}
      <div 
        className={`${className} bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='56' viewBox='0 0 100 56'%3E%3Crect width='100' height='56' fill='%23ff0000'/%3E%3Cpath d='M40 20l20 8-20 8V20z' fill='white'/%3E%3C/svg%3E")`,
          display: imageLoaded ? 'none' : 'block'
        }}
      />
      <img
        src={imgSrc}
        alt={title}
        className={className}
        onLoad={handleImageLoad}
        onError={handleImageError}
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        loading="lazy"
        style={{ 
          display: imageLoaded ? 'block' : 'none',
        }}
      />
      {!imageLoaded && !showPlaceholder && imgSrc && (
        <div className="absolute inset-0 bg-gray-300 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mb-2"></div>
          <p className="text-gray-600 text-xs text-center px-2">Loading...</p>
          <p className="text-gray-500 text-xs text-center px-1 mt-1">
            Attempt: {thumbnailUrls.indexOf(imgSrc) + 1}/{thumbnailUrls.length}
          </p>
        </div>
      )}
    </div>
  );
};

const SimpleYouTubeGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const channelId = 'UCBBxIfTOUMkUDL-vm4kdJhA';
  const maxResults = 12;
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  const fetchYouTubeVideos = async () => {
    if (!apiKey || apiKey === 'your_youtube_api_key_here') {
      console.log('YouTube API key not configured');
      setLoading(false);
      return;
    }

    try {
      // First get the videos with snippet data including thumbnails
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Full API Response:', data);
      
      const formattedVideos = data.items.map((item, index) => {
        // Use YouTube's direct thumbnail URLs (more reliable)
        const thumbnailUrl = `https://img.youtube.com/vi/${item.id.videoId}/hqdefault.jpg`;

        console.log(`Video ${index + 1}: ${item.snippet.title}, VideoID: ${item.id.videoId}, Thumbnail: ${thumbnailUrl}`);
        
        // Test thumbnail URL accessibility
        const testImg = new Image();
        testImg.onload = () => console.log(`✅ Thumbnail accessible: ${thumbnailUrl}`);
        testImg.onerror = () => console.error(`❌ Thumbnail failed: ${thumbnailUrl}`);
        testImg.src = thumbnailUrl;
        
        return {
          id: item.id.videoId,
          title: item.snippet.title,
          videoId: item.id.videoId,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          channelTitle: item.snippet.channelTitle,
          thumbnail: thumbnailUrl
        };
      });

      setVideos(formattedVideos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              YouTube <span className="text-red-600">Videos</span>
            </h2>
            <p className="text-xl text-slate-600">Loading latest yoga videos...</p>
          </div>
        </div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              YouTube <span className="text-red-600">Videos</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8">Visit our YouTube channel for yoga tutorials and wellness content</p>
            <a
              href={`https://www.youtube.com/channel/${channelId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
            YouTube Channel
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Latest <span className="text-red-600">Videos</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of yoga tutorials, meditation guides, and wellness practices
          </p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => openVideoModal(video)}
            >
              {/* Video Thumbnail with Play Button Overlay */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <VideoThumbnail 
                  videoId={video.videoId} 
                  title={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-red-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-slate-600 text-sm mb-2 line-clamp-2">
                  {video.description}
                </p>
                <p className="text-slate-500 text-xs">
                  {new Date(video.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href={`https://www.youtube.com/channel/${channelId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Visit YouTube Channel
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeVideoModal}
        >
          <motion.div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 md:h-80 lg:h-96"
                ></iframe>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-slate-600 mb-4">
                {selectedVideo.description}
              </p>
              <p className="text-slate-500 text-sm">
                Published on {new Date(selectedVideo.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SimpleYouTubeGallery;