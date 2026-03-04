export default function ProjectsSection() {
  const projects = [
    {
      title: 'Water Management Dashboard (Web Application)',
      date: 'August 15, 2025',
      tech: 'React.js, Next.js (SSR), Material UI',
      color: 'from-purple-400',
      tagColor: 'bg-purple-200 text-purple-700',
      description: [
        'Developed a real-time monitoring dashboard for water management data',
        'Implemented Mapbox for geolocation-based visualization',
        'Integrated RESTful APIs for dynamic data updates',
        'Reduced load time by 30% using code splitting',
        'Optimized performance using Next.js Server-Side Rendering (SSR)',
      ],
    },
    {
      title: 'Map Dashboard (Web Application)',
      date: 'July 14, 2025',
      tech: 'React.js, Next.js (SSR), Material UI',
      tagColor: 'bg-purple-200 text-purple-700',
      color: 'from-green-400',
      description: [
        'Developed a real-time monitoring dashboard for spatial data',
        'Integrated Mapbox for interactive geolocation visualization',
        'Built CCTV image capture and web-based video player interface',
        'Integrated RESTful APIs for real-time updates',
        'Reduced load time by 30% through code splitting optimization',
        'Implemented SSR with Next.js for better performance',
        'Wrote unit tests to ensure application reliability',
      ],
    },
    {
      title: 'Mobile Application Management Dashboard (iOS, Android)',
      date: 'June 28, 2025',
      tech: 'React Native',
      tagColor: 'bg-purple-200 text-purple-700',
      color: 'from-pink-400',
      description: [
        'Developed a real-time monitoring dashboard for sensor data',
        'Integrated RESTful APIs for cross-platform data synchronization',
      ],
    },
  ];

  return (
    <section
      id='projects'
      className='w-full text-white py-24 px-6 scroll-mt-24'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='flex gap-10'>
          {/* LEFT TIMELINE */}
          <div className='hidden lg:flex flex-col items-center pt-4'>
            <div className='w-12 h-12 xl:w-14 xl:h-14 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-md'>
              <div className='w-5 h-5 border border-white/60 rounded-sm'></div>
            </div>

            <div className='w-px flex-1 bg-gradient-to-b from-white/40 to-transparent mt-6'></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className='flex-1'>
            {/* HEADER */}
            <div className='mb-16'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                Projects
              </h1>
              <p className='text-gray-400 uppercase tracking-[0.25em] text-sm'>
                PROJECT EXPERIENCE
              </p>
            </div>

            {/* GRID */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className='relative group bg-[#f2f2f2] text-black rounded-3xl p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'
                >
                  {/* Gradient Curve */}
                  <div
                    className={`absolute -bottom-40 -right-40 w-[300px] h-[300px] 
                  bg-gradient-to-tr ${project.color} to-indigo-400
                  rounded-full
                  scale-0 group-hover:scale-100
                  transition-transform duration-700 ease-out`}
                  ></div>

                  {/* Content */}
                  <div className='relative z-10'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3'>
                      {project.title}
                    </h2>

                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium ${project.tagColor} rounded-full`}
                    >
                      {project.tech}
                    </span>

                    <ul className='list-disc list-inside text-sm sm:text-base mt-3 sm:mt-4'>
                      {project.description.map((description, index) => (
                        <li
                          className='text-gray-500 sm:text-base mt-0.5 sm:mt-0.5'
                          key={index}
                        >
                          {description}
                        </li>
                      ))}
                    </ul>
                    {/* <p className='text-gray-500 text-sm sm:text-base mt-3 sm:mt-4'>
                      {project.description}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
