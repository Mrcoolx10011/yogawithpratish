import { useState } from 'react';
import { FloatingParticles } from './ui/FloatingParticles';
import './ui/FloatingParticles.css';
import channelLogo from '../assets/images/yoga-with-pratish-1.webp';

function YouTubeSection() {
  // Your actual YouTube videos data with correct video IDs
  const youtubeVideos = [
    {
      id: "1",
      title: "yoga for all kinds of health issues",
      thumbnail: "https://img.youtube.com/vi/W8LMHFerAC4/maxresdefault.jpg",
      duration: "0:41",
      views: "152 views",
      uploadTime: "2 years ago",
      videoId: "W8LMHFerAC4" // You'll need to replace this with actual video ID
    },
    // {
    //   id: "2", 
    //   title: "yoga for a healthy mind and body @yogawithpratish",
    //   thumbnail: "https://img.youtube.com/vi/eRVM2NqZtIA/maxresdefault.jpg",
    //   duration: "0:50",
    //   views: "294 views", 
    //   uploadTime: "2 years ago",
    //   videoId: "eRVM2NqZtIA" // You'll need to replace this with actual video ID
    // },
    {
      id: "3",
      title: "What is Yoga? | Meaning and Origin | Traditional Yoga",
      thumbnail: "https://img.youtube.com/vi/dT63aLZygW4/maxresdefault.jpg",
      duration: "3:22",
      views: "169 views",
      uploadTime: "3 years ago", 
      videoId: "dT63aLZygW4" // You'll need to replace this with actual video ID
    },
    {
      id: "4",
      title: "Anulom Vilom | You may be doing it wrong! | Yogic Breathing #yoga #quick #lifestyle",
      thumbnail: "https://img.youtube.com/vi/Z3MD0HvcR3M/maxresdefault.jpg",
      duration: "6:32",
      views: "117 views",
      uploadTime: "3 years ago",
      videoId: "Z3MD0HvcR3M" // You'll need to replace this with actual video ID
    },
    {
      id: "5",
      title: "How a yoga session must be practiced | Correct way to practice yoga | #yoga",
      thumbnail: "https://img.youtube.com/vi/vzvVX-8Dnfk/maxresdefault.jpg",
      duration: "46:27",
      views: "85 views",
      uploadTime: "3 years ago",
      videoId: "vzvVX-8Dnfk" // You'll need to replace this with actual video ID
    },
    {
      id: "6",
      title: "Yoga With Pratish | Join Yoga Classes Online | Learn Traditional Art of Yoga | #yoga",
      thumbnail: "https://img.youtube.com/vi/0p3VLYhW7Wk/maxresdefault.jpg",
      duration: "3:22",
      views: "206 views",
      uploadTime: "3 years ago",
      videoId: "0p3VLYhW7Wk" // You'll need to replace this with actual video ID
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // Channel ID for your YouTube channel
  const channelId = "UCBBxIfTOUMkUDL-vm4kdJhA";

  return (
    <div className="youtube-container section-with-particles">
      <FloatingParticles 
        particleCount={60}
        color="#ff0000"
        opacity={0.3}
        speed={0.3}
        size={0.8}
        containerClass="youtube-particles"
      />
      
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-[#333333]">
              YouTube <span className="text-[#ff0000]">Videos</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-[#ff0000] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-[#333333]/80 max-w-2xl mx-auto px-4 mb-8">
              Visit our YouTube channel for yoga tutorials and wellness content
            </p>
          </div>

          {/* Channel Info Card */}
          <div className="mb-12 md:mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-xl border border-white/20">
              {/* Channel Header */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                {/* Channel Avatar */}
                <div className="w-20 h-20 flex-shrink-0">
                  <img src={channelLogo} alt="YOGA WITH PRATISH" className="w-full h-full rounded-full object-cover shadow-lg" />
                </div>
                
                {/* Channel Basic Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-[#333333] mb-2">
                    YOGA WITH PRATISH
                  </h3>
                  <p className="text-[#666] text-sm mb-1">@yogawithpratish2509</p>
                  <p className="text-[#666] text-sm">40 subscribers • 13 videos</p>
                </div>
              </div>
              
              {/* Channel Description */}
              <div className="text-center mb-6">
                <p className="text-[#333333]/80 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                  I have created this channel to upload videos about yoga and its benefits. Join me for authentic yoga practices and wellness guidance.
                </p>
              </div>
              
              {/* Channel Links */}
              <div className="text-center mb-6">
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a 
                    href="https://yogawithpratish.com" 
                    className="text-[#ff0000] hover:text-[#cc0000] transition-colors underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    yogawithpratish.com
                  </a>
                  <span className="text-[#666]">and 3 more links</span>
                </div>
              </div>
              
              {/* Visit Channel Button */}
              <div className="text-center">
                <a 
                  href={`https://www.youtube.com/channel/${channelId}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#ff0000] hover:bg-[#cc0000] text-white px-6 md:px-8 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Visit YouTube Channel
                </a>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {youtubeVideos.map((video, index) => (
              <div 
                key={video.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
                onClick={() => openVideo(video.videoId)}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to different thumbnail qualities
                      if (e.target.src.includes('maxresdefault')) {
                        e.target.src = e.target.src.replace('maxresdefault', 'hqdefault');
                      } else if (e.target.src.includes('hqdefault')) {
                        e.target.src = e.target.src.replace('hqdefault', 'mqdefault');
                      } else {
                        // Final fallback to a yoga-themed placeholder
                        e.target.src = `https://via.placeholder.com/480x270/D4A373/ffffff?text=Yoga+Video+${index + 1}`;
                      }
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#ff0000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-[#333333] mb-2 line-clamp-2 group-hover:text-[#ff0000] transition-colors leading-tight">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-sm text-[#666] space-x-2">
                    <span>{video.views}</span>
                    <span>•</span>
                    <span>{video.uploadTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-[#ff0000] transition-colors"
              >
                ✕
              </button>
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default YouTubeSection;