"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// MediaItem component renders either a video or image based on item.type
const MediaItem = ({ item, className }) => {
    const videoRef = useRef(null); // Reference for video element
    const [isInView, setIsInView] = useState(false); // To track if video is in the viewport
    const [isBuffering, setIsBuffering] = useState(true);  // To track if video is buffering

    // Intersection Observer to detect if video is in view and play/pause accordingly
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting); // Set isInView to true if the video is in view
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current); // Start observing the video element
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current); // Clean up observer when component unmounts
            }
        };
    }, []);

    // Handle video play/pause based on whether the video is in view or not
    useEffect(() => {
        let mounted = true;

        const handleVideoPlay = async () => {
            if (!videoRef.current || !isInView || !mounted) return; // Don't play if video is not in view or component is unmounted

            try {
                if (videoRef.current.readyState >= 3) {
                    setIsBuffering(false);
                    await videoRef.current.play(); // Play the video if it's ready
                } else {
                    setIsBuffering(true);
                    await new Promise((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.oncanplay = resolve; // Wait until the video can start playing
                        }
                    });
                    if (mounted) {
                        setIsBuffering(false);
                        await videoRef.current.play();
                    }
                }
            } catch (error) {
                console.warn("Video playback failed:", error);
            }
        };

        if (isInView) {
            handleVideoPlay();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }

        return () => {
            mounted = false;
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.removeAttribute('src');
                videoRef.current.load();
            }
        };
    }, [isInView]);

    // Render either a video or image based on item.type
    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden`}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    playsInline
                    muted
                    loop
                    preload="auto"
                    style={{
                        opacity: isBuffering ? 0.8 : 1,
                        transition: 'opacity 0.2s',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <img
            src={item.url} // Image source URL
            alt={item.title} // Alt text for the image
            className={`${className} object-cover`} // Style the image - removed cursor-pointer
            loading="lazy" // Lazy load the image for performance
            decoding="async" // Decode the image asynchronously
        />
    );
};

const InteractiveBentoGallery = ({ mediaItems, title, description }) => {
    const [items, setItems] = useState(mediaItems);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="mb-12 text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent 
                             bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700
                             dark:from-amber-400 dark:via-orange-400 dark:to-amber-500
                             mb-4 leading-tight"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 
                             max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {description}
                </motion.p>
            </div>
            
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
                         gap-3 sm:gap-4 md:gap-6 auto-rows-[120px] sm:auto-rows-[140px] 
                         md:auto-rows-[160px] lg:auto-rows-[180px]"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                    }
                }}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layoutId={`media-${item.id}`}
                        className={`relative overflow-hidden rounded-xl sm:rounded-2xl cursor-move 
                                  ${item.span} group shadow-lg hover:shadow-2xl transition-all duration-500
                                  bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900
                                  border border-amber-100 dark:border-gray-700`}
                        variants={{
                            hidden: { y: 60, scale: 0.8, opacity: 0, rotateX: -15 },
                            visible: {
                                y: 0,
                                scale: 1,
                                opacity: 1,
                                rotateX: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                    delay: index * 0.05
                                }
                            }
                        }}
                        whileHover={{ 
                            scale: 1.05, 
                            y: -8,
                            rotateX: 5,
                            rotateY: 5,
                            transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={1}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={(e, info) => {
                            setIsDragging(false);
                            const moveDistance = info.offset.x + info.offset.y;
                            if (Math.abs(moveDistance) > 50) {
                                const newItems = [...items];
                                const draggedItem = newItems[index];
                                const targetIndex = moveDistance > 0 ?
                                    Math.min(index + 1, items.length - 1) :
                                    Math.max(index - 1, 0);
                                newItems.splice(index, 1);
                                newItems.splice(targetIndex, 0, draggedItem);
                                setItems(newItems);
                            }
                        }}
                    >
                        <MediaItem
                            item={item}
                            className="absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl"
                        />
                        
                        {/* Hover glow effect */}
                        <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 
                                     rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.3 }}
                        />
                        
                        {/* Content overlay */}
                        <motion.div
                            className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                                          rounded-xl sm:rounded-2xl" />
                            <div className="relative z-10">
                                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl 
                                             font-semibold line-clamp-1 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-xs sm:text-sm md:text-base 
                                            line-clamp-2 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                        
                        {/* Floating particles effect */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl sm:rounded-2xl"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-amber-400 rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [-10, -20, -10],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default InteractiveBentoGallery