async function getUsers() {
  const res = await fetch('http://localhost:5079/api/users', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch');
  const data = await res.json();
  console.log(data);
  return data; // ✅ return ตัวที่อ่านแล้ว
}

export default function SkillSection() {
  //   const users = getUsers();
  const skills = [
    {
      title: 'Frontend',
      date: 'August 15, 2025',
      level: 'Advanced',
      tagColor: 'bg-purple-200 text-purple-700',
      color: 'from-purple-400',
      description:
        'HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Redux',
    },
    {
      title: 'Back-End',
      date: 'May 4, 2025',
      level: 'Beginner',
      tagColor: 'bg-green-200 text-green-700',
      color: 'from-purple-400',
      description:
        'C#, .NET, ASP.NET Core, RESTful API Development, Entity Framework, SQL Server',
    },
    {
      title: 'API & Data Handling',
      date: 'July 14, 2025',
      level: 'Advanced',
      tagColor: 'bg-purple-200 text-purple-700',
      color: 'from-green-400',
      description: 'RESTful API Integration, Fetch API, JSON Handling',
    },
    {
      title: 'UI / UX',
      date: 'June 28, 2025',
      level: 'Intermediate',
      tagColor: 'bg-pink-200 text-pink-700',
      color: 'from-pink-400',
      description: 'UI Implementation from Figma',
    },
  ];

  return (
    <section id='skills' className='w-full  text-white py-24 px-6 scroll-mt-24'>
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
                Skills
              </h1>
              <p className='text-gray-400 uppercase tracking-[0.25em] text-sm'>
                Active Research Areas
              </p>
            </div>

            {/* GRID */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {skills.map((project, index) => (
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

                    {/* <p className='text-gray-500 text-sm sm:text-base mb-3 sm:mb-4'>
                      {project.date}
                    </p> */}

                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium ${project.tagColor} rounded-full`}
                    >
                      {project.level}
                    </span>

                    <p className='text-gray-500 text-sm sm:text-base mt-3 sm:mt-4'>
                      {project.description}
                    </p>
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
