import FAQContainer from '@/components/faq/FAQContainer';

const SectionFAQ = () => {
  return (
    <section id='faq' className='w-full py-20 md:py-28'>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        {/* Header */}
        <h2 className='text-white text-3xl md:text-4xl font-bold'>
          Still Got Questions?
        </h2>
        <p className='text-neutral-400 text-sm md:text-base mt-2 max-w-lg'>
          I&apos;ve listed answers to questions I often get as a frontend
          developer.
        </p>

        <FAQContainer />
      </div>
    </section>
  );
};

export default SectionFAQ;
