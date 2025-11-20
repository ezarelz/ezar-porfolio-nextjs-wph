import { ToolsLeft } from '@/components/tools-section/ToolsLeft';
import { ToolsRight } from '@/components/tools-section/ToolsRight';

export const SectionTools = () => {
  return (
    <section id='skill' className='w-full py-16'>
      <div className='container mx-auto flex flex-col px-6 md:flex-row gap-12'>
        <div className='md:w-1/2'>
          <ToolsLeft />
        </div>

        <div className='md:w-1/2'>
          <ToolsRight />
        </div>
      </div>
    </section>
  );
};
