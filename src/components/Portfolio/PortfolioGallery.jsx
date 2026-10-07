import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { categories, videos, renders, designPlans, construction } from './portfolioData';

const SectionHeading = ({ eyebrow, title, highlight, text }) => (
  <motion.div
    className="text-center max-w-3xl mx-auto mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
  >
    <div className="inline-block bg-[#AF8A2D]/10 px-4 py-2 rounded-full mb-4">
      <span className="text-sm font-semibold tracking-wider uppercase text-[#AF8A2D]">{eyebrow}</span>
    </div>
    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      {title} <span className="text-[#B4974C]">{highlight}</span>
    </h3>
    <p className="text-gray-600 text-lg">{text}</p>
  </motion.div>
);

// Muted, looping preview that only loads and plays while on screen
const AutoPlayVideo = ({ src, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      muted
      loop
      playsInline
      preload="none"
    />
  );
};

const MediaTile = ({ item, onOpen, className = '', label }) => (
  <motion.button
    type="button"
    onClick={onOpen}
    className={`group relative overflow-hidden rounded-xl bg-gray-100 shadow-md w-full text-left ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    aria-label={`Open ${item.title}`}
  >
    {item.type === 'video' ? (
      <AutoPlayVideo
        src={item.src}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    ) : (
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80 group-hover:opacity-100 transition-opacity" />
    <div className="absolute inset-0 flex items-center justify-center">
      {item.type === 'video' ? (
        <span className="w-16 h-16 rounded-full bg-[#B4974C]/90 flex items-center justify-center shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all">
          <Play className="w-7 h-7 text-white ml-1" fill="white" />
        </span>
      ) : (
        <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-5 h-5 text-white" />
        </span>
      )}
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <p className="text-white font-semibold text-sm md:text-base">{label || item.title}</p>
    </div>
  </motion.button>
);

const Lightbox = ({ items, index, onClose, onNavigate }) => {
  const item = items[index];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNavigate]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#B4974C] text-white flex items-center justify-center z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {items.length > 1 && (
        <>
          <button
            className="absolute left-2 md:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center z-10"
            onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-2 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center z-10"
            onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <motion.div
        key={item.src}
        className="max-w-6xl w-full flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'video' ? (
          <video
            src={item.src}
            className="max-h-[80vh] w-auto max-w-full rounded-lg"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img src={item.src} alt={item.title} className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain bg-white" />
        )}
        <div className="mt-4 text-center">
          <p className="text-white font-semibold">{item.title}</p>
          <p className="text-gray-400 text-sm">{index + 1} / {items.length}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null); // { items, index }

  const show = (id) => activeCategory === 'all' || activeCategory === id;
  const open = (items, index) => setLightbox({ items, index });
  const close = useCallback(() => setLightbox(null), []);
  const navigate = useCallback((step) => {
    setLightbox((lb) => lb && { ...lb, index: (lb.index + step + lb.items.length) % lb.items.length });
  }, []);

  // Flatten each plan pair into render → plan so the lightbox can step through both
  const planMedia = designPlans.flatMap((p) => [p.render, p.plan]);

  return (
    <section id="portfolio-gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#B4974C] border-[#B4974C] text-white'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-[#B4974C] hover:text-[#B4974C]'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-24"
          >
            {/* Videos */}
            {show('videos') && (
              <div>
                <SectionHeading
                  eyebrow="Project Films"
                  title="See Our Work"
                  highlight="In Motion"
                  text="Walkthroughs and project films showcasing Najville Realties designs and builds."
                />
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                  {videos.map((v, i) => (
                    <MediaTile
                      key={v.id}
                      item={v}
                      onOpen={() => open(videos, i)}
                      className={`aspect-video ${i < 2 ? 'md:col-span-3' : 'md:col-span-2'}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 3D Renders */}
            {show('renders') && (
              <div>
                <SectionHeading
                  eyebrow="3D Visualization"
                  title="Photorealistic"
                  highlight="Renders"
                  text="Experience a building before the first block is laid, with detailed exterior visualizations."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renders.map((r, i) => (
                    <MediaTile key={r.id} item={r} onOpen={() => open(renders, i)} className="aspect-[3/2]" />
                  ))}
                </div>
              </div>
            )}

            {/* Design & Plans */}
            {show('plans') && (
              <div>
                <SectionHeading
                  eyebrow="Architectural Design"
                  title="From Plan"
                  highlight="To Visualization"
                  text="Each concept pairs precise architectural drawings with the 3D render they bring to life."
                />
                <div className="space-y-10">
                  {designPlans.map((p, i) => (
                    <div key={p.id} className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
                      <MediaTile
                        item={p.render}
                        label={`${p.title} · 3D View`}
                        onOpen={() => open(planMedia, i * 2)}
                        className={`aspect-[16/10] md:col-span-3 ${i % 2 ? 'md:order-2' : ''}`}
                      />
                      <MediaTile
                        item={p.plan}
                        label={`${p.title} · Plan`}
                        onOpen={() => open(planMedia, i * 2 + 1)}
                        className={`aspect-[16/10] md:aspect-auto md:col-span-2 bg-white border border-gray-200 [&_img]:object-contain [&_img]:p-2 ${i % 2 ? 'md:order-1' : ''}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Construction */}
            {show('construction') && (
              <div>
                <SectionHeading
                  eyebrow="On Site"
                  title="Building With"
                  highlight="Quality"
                  text="Real progress from our construction sites — where designs become durable homes."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {construction.map((c, i) => (
                    <MediaTile
                      key={c.id}
                      item={c}
                      onOpen={() => open(construction, i)}
                      className={`aspect-[4/3] ${i === 0 ? 'lg:row-span-2 lg:aspect-auto' : ''}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox items={lightbox.items} index={lightbox.index} onClose={close} onNavigate={navigate} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGallery;
