import Image from 'next/image';

export default function UserProfile() {
  return (
    <section
      id='profile'
      className=' flex h-[700px] items-center  text-white px-50 py-20 mt-40 sm:mt-60'
    >
      <div className='max-w-7xl mx-auto w-full'>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20'>
          {/* LEFT CONTENT */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
              Hi, I'm <span className='text-purple-400'>Apisit Sangsawang</span>
            </h1>

            <h2 className='text-lg sm:text-xl md:text-2xl text-gray-300 mb-6'>
              Frontend Developer | React & Next.js Specialist
            </h2>

            <p className='text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8'>
              Frontend Developer with 3+ years of experience building responsive
              and high-performance web applications. Specialized in React.js,
              Next.js, and modern UI/UX design. Passionate about clean
              architecture, performance optimization, and creating seamless user
              experiences.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <a
                href='#projects'
                className='px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl font-semibold'
              >
                View Projects
              </a>

              <a
                href='#contacts'
                className='px-6 py-3 border border-white/30 hover:border-purple-400 hover:text-purple-400 transition rounded-xl'
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className='flex-1 flex justify-center'>
            <div className='relative'>
              {/* Glow background */}
              <div className='absolute inset-0  blur-3xl rounded-full'></div>

              <Image
                src={'/profile.jpg'}
                alt='Profile'
                width={400}
                height={400}
                className='rounded-[2vw] object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
