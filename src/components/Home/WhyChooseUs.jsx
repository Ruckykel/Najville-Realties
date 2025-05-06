import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <ValueCards />
      </div>
    </section>
  );
};

const SectionHeader = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <motion.div 
      className="text-center"
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
    >
      <div className="inline-block">
        <motion.h2 
          className="text-sm font-semibold tracking-wider uppercase text-[#AF8A2D]"
        >
          WHY CHOOSE US
        </motion.h2>
        <motion.div 
          className="w-12 h-0.5 bg-[#AF8A2D] mt-2 mb-6 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
      </div>
      <motion.h3 
        className="text-4xl font-bold text-gray-900 sm:text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        What Sets Us Apart
      </motion.h3>
      <motion.p 
        className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        At Najville Realties, we believe in enriching lives through thoughtful design and construction. We take a holistic approach to development, handling every aspect of your project to provide a seamless and stress-free experience.
      </motion.p>
    </motion.div>
  );
};

const valueData = [
  {
    icon: "/Trust.svg",
    title: "Integrity",
    description: "We hold ourselves to the highest standards of honesty and transparency in all our interactions. Our commitment to ethical practices ensures that we build lasting relationships based on trust and reliability."
  },
  {
    icon: "/Innovation.svg",
    title: "Innovation",
    description: "We constantly seek new and improved ways to deliver exceptional real estate solutions. Our innovative approach combines cutting-edge technology with creative design to create spaces that inspire and endure."
  },
  {
    icon: "/Customer.svg",
    title: "Customer-Centricity",
    description: "Your vision and satisfaction are at the heart of everything we do. We listen attentively to your needs and preferences, ensuring that each project reflects your unique personality and requirements."
  },
  {
    icon: "/Sustainability.svg",
    title: "Sustainability",
    description: "We are committed to environmentally responsible practices throughout our design and construction process. By integrating sustainable solutions, we create properties that minimize environmental impact."
  }
];

const ValueCard = ({ icon, title, description, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 * index,
        ease: "easeOut"
      }
    }
  };
  
  const iconVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        delay: 0.3 * index, 
        duration: 0.6
      }
    }
  };
  
  const underlineVariants = {
    initial: { width: 0 },
    animate: { 
      width: 48,
      transition: { 
        delay: 0.4 * index, 
        duration: 0.4
      }
    },
    hover: { 
      width: 80,
      backgroundColor: "#AF8A2D",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div 
        className="mb-4"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        <img src={icon} alt={title} className="w-8 h-8" />
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed px-4">{description}</p>
      <motion.div 
        className="mt-6 h-1 bg-[#AF8A2D]/40 rounded-full"
        variants={underlineVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      />
    </motion.div>
  );
};

const ValueCards = () => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
      {valueData.map((value, index) => (
        <ValueCard 
          key={index}
          icon={value.icon}
          title={value.title}
          description={value.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default WhyChooseUs;