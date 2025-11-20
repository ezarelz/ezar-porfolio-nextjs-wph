const AboutHeading = () => {
  return (
    <div className='w-full flex flex-col md:flex-row md:items-start md:justify-between'>
      {/* LEFT — HEADING */}
      <div className='space-y-4'>
        <h2
          className='
            text-3xl sm:text-4xl md:text-5xl 
            font-bold leading-tight
            text-var(--color-text)
          '
        >
          <span className='block'>
            I turn ideas and designs into functional,
          </span>

          <span className='block'>accessible, and performant websites</span>

          <span className='block text-(--color-primary-200)'>
            using modern frontend technologies.
          </span>
        </h2>
      </div>

      {/* RIGHT SECTION */}
      <div className='mt-4 md:mt-0 md:ml-10'>
        <span className='text-sm text-white/60 tracking-wide'>About Me</span>
      </div>
    </div>
  );
};

export default AboutHeading;
