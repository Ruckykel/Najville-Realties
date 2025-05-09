import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Course Card Component
const CourseCard = ({ course, index, openModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full"
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-[#AF8A2D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            {course.level}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
          <div className="flex items-center text-gray-300 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.duration}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-6">{course.description}</p>
        
        <h4 className="font-semibold text-gray-900 mb-4">What You'll Learn:</h4>
        <ul className="space-y-2 mb-6">
          {course.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start">
              <div className="bg-[#AF8A2D]/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                <div className="bg-[#AF8A2D] rounded-full w-2 h-2"></div>
              </div>
              <p className="text-gray-700 text-sm">{highlight}</p>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <div className="border-t border-gray-100 pt-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-500 text-sm">Price</span>
                <p className="text-2xl font-bold text-gray-900">₦250,000</p>
              </div>
              <div className="text-right">
                <span className="text-gray-500 text-sm">Format</span>
                <p className="text-sm font-medium text-gray-700">{course.format}</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#AF8A2D] hover:bg-[#8A6F25] text-white font-bold py-2 px-4 rounded-lg shadow-md flex-grow"
              onClick={() => openModal(course)}
            >
              Learn More
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg"
            >
              Enroll
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Course Modal Component
const CourseModal = ({ isOpen, onClose, course }) => {
  // Animation variants for modal
  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backdropVariants}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="h-64 relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <button 
                  onClick={onClose}
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-[#AF8A2D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-2 inline-block">
                  {course.level}
                </span>
                <h2 className="text-3xl font-bold text-white">{course.title}</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <span className="text-gray-500 text-sm">Duration</span>
                  <p className="text-lg font-semibold text-gray-900">{course.duration}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <span className="text-gray-500 text-sm">Price</span>
                  <p className="text-lg font-semibold text-gray-900">₦250,000</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <span className="text-gray-500 text-sm">Format</span>
                  <p className="text-lg font-semibold text-gray-900">{course.format}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Overview</h3>
                <p className="text-gray-700">{course.fullDescription}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learningObjectives.map((objective, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="bg-[#AF8A2D]/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <div className="bg-[#AF8A2D] rounded-full w-3 h-3"></div>
                      </div>
                      <p className="text-gray-700">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Who Should Attend</h3>
                <ul className="space-y-2">
                  {course.targetAudience.map((audience, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-[#AF8A2D]/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <div className="bg-[#AF8A2D] rounded-full w-3 h-3"></div>
                      </div>
                      <p className="text-gray-700">{audience}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Schedule</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-2 bg-gray-50 font-medium text-gray-700">
                    <div className="p-4 border-b border-r border-gray-200">Day</div>
                    <div className="p-4 border-b border-gray-200">Topics</div>
                  </div>
                  {course.schedule.map((day, idx) => (
                    <div key={idx} className="grid grid-cols-2 border-b border-gray-200 last:border-b-0">
                      <div className="p-4 border-r border-gray-200 font-medium">{day.day}</div>
                      <div className="p-4">
                        <ul className="space-y-1">
                          {day.topics.map((topic, topicIdx) => (
                            <li key={topicIdx} className="text-gray-700">{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const TrainingCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const courses = [
    {
      title: "AutoCAD Essentials",
      image: "/Autocad.jpeg",
      level: "Beginner",
      duration: "3 Days",
      format: "In-person or Live Online",
      description: "Our AutoCAD Essentials course delivers comprehensive training in the core skills needed to create professional 2D drawings, plans, and designs.",
      highlights: [
        "Navigate the AutoCAD interface confidently",
        "Master precision drawing techniques",
        "Learn efficient editing commands",
        "Create and manage layers effectively",
        "Set up proper dimensioning and annotation"
      ],
      fullDescription: "Our AutoCAD Essentials course delivers comprehensive training in the core skills needed to create professional 2D drawings, plans, and designs. Developed by CAD professionals and refined over 20 years, this course offers the most efficient path to AutoCAD proficiency. This hands-on course covers everything you need to create accurate and professional 2D drawings.",
      learningObjectives: [
        "AutoCAD Interface and Workspace: Navigate the ribbon, command line, and viewports with confidence",
        "Drawing Setup and Management: Create drawing templates with proper units, scales, and layers",
        "Precision Drawing Techniques: Master object snaps, tracking, and coordinate entry for accurate drawings",
        "Creating and Editing Basic Objects: Work efficiently with lines, arcs, circles, and polygons",
        "Advanced Editing Commands: Use trim, extend, fillet, chamfer, and array to modify drawings",
        "Working with Layers: Organize drawings using layers, properties, and standards",
        "Annotation and Dimensioning: Add text, dimensions, and leaders according to industry standards",
        "Blocks and Attributes: Create and manage reusable components with data",
        "External References: Link drawings together using xrefs for collaborative workflows",
        "Layouts and Printing: Set up paper space layouts and plot drawings to scale"
      ],
      targetAudience: [
        "Architects and designers new to CAD",
        "Self-taught users wanting to learn proper techniques",
        "Building professionals transitioning from other CAD software",
        "Design-build professionals seeking to standardize documentation"
      ],
      schedule: [
        {
          day: "Day 1",
          topics: [
            "Introduction to AutoCAD interface",
            "Drawing setup and file management",
            "Basic drawing and editing commands",
            "Precision techniques and coordinate systems",
            "Working with layers"
          ]
        },
        {
          day: "Day 2",
          topics: [
            "Advanced editing techniques",
            "Working with blocks and attributes",
            "Drawing organization and management",
            "Annotation and text styles",
            "Dimensioning principles and techniques"
          ]
        },
        {
          day: "Day 3",
          topics: [
            "External references (Xrefs)",
            "Layout setup and viewports",
            "Plotting and printing",
            "Drawing standards and template creation",
            "Tips and tricks for productivity"
          ]
        }
      ]
    },
    {
      title: "Revit Architecture Essentials",
      image: "/Revit.jpeg",
      level: "Beginner",
      duration: "3 Days",
      format: "In-person or Live Online",
      description: "Master the fundamentals of Building Information Modeling with our comprehensive Revit Architecture Essentials course, specifically designed for architects and building professionals.",
      highlights: [
        "Understand BIM fundamentals",
        "Create and edit floor plans",
        "Develop building sections and elevations",
        "Work with Revit families and components",
        "Generate construction documentation"
      ],
      fullDescription: "Master the fundamentals of Building Information Modeling with our comprehensive Revit Architecture Essentials course, specifically designed for architects and building professionals. This 3-day intensive training provides a solid foundation in Revit's powerful tools for parametric building design and documentation. This course takes you from schematic design through to construction documentation.",
      learningObjectives: [
        "Building Information Modeling (BIM) Fundamentals: Understand how BIM transforms architectural workflows and project delivery",
        "Revit User Interface Navigation: Master the ribbon, properties palette, and project browser",
        "Working with Revit Elements and Families: Learn to use system families, loadable families, and in-place families effectively",
        "Creating and Editing Floor Plans: Develop comprehensive floor plans using walls, doors, windows, and components",
        "Managing Levels and Building Stories: Set up and modify building levels for multi-story projects",
        "Developing Building Sections and Elevations: Generate and refine building sections and elevation views",
        "Adding Dimensions and Annotations: Create properly constrained dimensions and annotations",
        "Basic Rendering and Visualization: Produce compelling presentations with materials and lighting",
        "Construction Documentation: Generate sheets and views for construction documentation"
      ],
      targetAudience: [
        "Architects transitioning from 2D CAD to BIM",
        "Architectural designers new to Revit",
        "Building professionals seeking to enhance their BIM skills",
        "Design-builders who need to understand architectural documentation"
      ],
      schedule: [
        {
          day: "Day 1",
          topics: [
            "Introduction to BIM concepts",
            "Revit user interface and navigation",
            "Starting a new project and setting up levels",
            "Creating basic walls, doors, and windows",
            "Working with Revit views"
          ]
        },
        {
          day: "Day 2",
          topics: [
            "Working with Revit families and components",
            "Creating and modifying floors and ceilings",
            "Adding stairs and railings",
            "Working with roofs",
            "Creating building sections and elevations"
          ]
        },
        {
          day: "Day 3",
          topics: [
            "Adding dimensions and annotations",
            "Working with rooms and area plans",
            "Basic rendering and visualization",
            "Creating sheets and preparing documentation",
            "Printing and exporting"
          ]
        }
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#AF8A2D]/10 px-4 py-2 rounded-full mb-4">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-[#AF8A2D]">
              Our Training Courses
            </h2>
          </div>
          
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Architectural Software Mastery
          </h3>
          
          <div className="w-24 h-0.5 bg-[#AF8A2D] mx-auto mb-6"></div>
          
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our industry-leading courses are designed to help architects and builders create professional documentation and visualizations efficiently.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <CourseCard 
              key={index} 
              course={course} 
              index={index} 
              openModal={openModal}
            />
          ))}
        </div>
        
        {selectedCourse && (
          <CourseModal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
            course={selectedCourse} 
          />
        )}
      </div>
    </section>
  );
};

export default TrainingCourses;