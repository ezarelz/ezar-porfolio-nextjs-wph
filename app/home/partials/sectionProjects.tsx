'use client';

import ProjectCard from '@/components/projects/projectCard';

export default function SectionProjects() {
  return (
    <section id='projects' className='w-full py-20'>
      <div className='container mx-auto px-5 text-center'>
        {/* heading */}
        <h2 className='text-3xl md:text-4xl font-bold text-'>
          Bridging Design and Development
        </h2>

        <p className='text-muted-foreground mt-3 mx-auto'>
          These are real projects where I implemented frontend interfaces with
          precision and attention to detail.
        </p>

        {/* grid */}
        <div className='mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
          <ProjectCard
            title='Portofolio 1'
            year='2025'
            image='/images/project-1.svg'
            href='#'
          />
          <ProjectCard
            title='Portofolio 2'
            year='2025'
            image='/images/project-2.svg'
            href='#'
          />
          <ProjectCard
            title='Portofolio 3'
            year='2025'
            image='/images/project-3.svg'
            href='#'
          />
        </div>
      </div>
    </section>
  );
}
