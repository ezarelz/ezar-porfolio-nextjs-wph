'use client';

import React, { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';

import {
  contactSchema,
  type ContactSchema,
} from '@/lib/validations/contactSchema';
import SuccessModal from './SucessModal';
import FailedModal from './FailedModal';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const onSubmit = async () => {
    if (!formRef.current) return;
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setOpenSuccess(true);
      reset();
    } catch (err) {
      setOpenError(true);
      console.error('Email error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-5'
    >
      {/* Name */}
      <div className='flex flex-col gap-2'>
        <label className='text-white text-sm font-medium'>Name</label>
        <input
          type='text'
          placeholder='Enter your name'
          {...register('name')}
          className='w-full bg-black border border-[#1F1F1F] text-white placeholder-neutral-500 px-4 py-3 rounded-md focus:outline-none focus:border-[#0FA4AF] transition'
        />
        {errors.name && (
          <span className='text-red-400 text-xs'>{errors.name.message}</span>
        )}
      </div>

      {/* Email */}
      <div className='flex flex-col gap-2'>
        <label className='text-white text-sm font-medium'>Email</label>
        <input
          type='email'
          placeholder='Enter your email'
          className='w-full bg-black border border-[#1F1F1F] text-white placeholder-neutral-500 px-4 py-3 rounded-md focus:outline-none focus:border-[#0FA4AF] transition'
        />
      </div>

      {/* Message */}
      <div className='flex flex-col gap-2'>
        <label className='text-white text-sm font-medium'>Message</label>
        <textarea
          placeholder='Enter your message'
          rows={5}
          {...register('message')}
          className='w-full bg-black border border-[#1F1F1F] text-white placeholder-neutral-500 px-4 py-3 rounded-md focus:outline-none focus:border-[#0FA4AF] resize-none transition'
        />
        {errors.message && (
          <span className='text-red-400 text-xs'>{errors.message.message}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type='submit'
        disabled={loading}
        className='w-full bg-white text-black font-medium rounded-md px-4 py-3 flex items-center justify-center gap-2 hover:bg-neutral-200 transition disabled:opacity-50 cursor-pointer'
      >
        <Mail size={18} className='text-black' />
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      <SuccessModal open={openSuccess} onClose={() => setOpenSuccess(false)} />
      <FailedModal open={openError} onClose={() => setOpenError(false)} />
    </form>
  );
};

export default ContactForm;
