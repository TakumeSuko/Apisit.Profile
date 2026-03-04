export default function ContactSection() {
  return (
    <section id='contacts' className='w-full py-24 text-white'>
      <div className='max-w-4xl mx-auto px-6'>
        {/* Title */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold'>Contact Me</h2>
          <p className='text-gray-400 mt-4'>
            Let’s connect and build something impactful.
          </p>
        </div>

        {/* Contact Card */}
        <div className='bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 text-center space-y-6'>
          <div className='space-y-2 text-gray-300'>
            <p className='text-lg'>📧 Apisit.sang1995@gmail.com</p>
            <p className='text-lg'>📱 +66 062-891-4064</p>
            <p className='text-lg'>📍 Bangkok, Thailand</p>
          </div>

          {/* Social Links */}
          <div className='flex flex-wrap justify-center gap-4 pt-6'>
            <a
              href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profilehttps://www.linkedin.com/in/apisit-sangsawang-profile/'
              target='_blank'
              className='px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-full font-medium'
            >
              LinkedIn
            </a>

            <a
              href='https://github.com/TakumeSuko'
              target='_blank'
              className='px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition rounded-full font-medium'
            >
              GitHub
            </a>

            <a
              href='https://www.instagram.com/llee.exx/'
              target='_blank'
              className='px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 hover:opacity-90 transition rounded-full font-medium'
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
