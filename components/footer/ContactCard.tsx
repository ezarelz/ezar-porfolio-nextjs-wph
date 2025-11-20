import React from 'react';
import ContactForm from './contacts/ContactForm';

const ContactCard = () => {
  return (
    <div
      id='contact'
      className='w-full bg-black border border-white/10 rounded-xl p-6 md:p-8'
    >
      <h2 className='text-3xl md:text-4xl font-bold text-white leading-tight'>
        Let&apos;s <span className='text-[#0FA4AF]'>Build Something</span> Great
      </h2>

      <p className='text-neutral-300 text-sm md:text-base max-w-md mt-3 mb-8 leading-relaxed'>
        Got an idea, a project, or just want to connect? I&apos;m always open to
        new conversations.
      </p>

      <ContactForm />
    </div>
  );
};

export default ContactCard;
