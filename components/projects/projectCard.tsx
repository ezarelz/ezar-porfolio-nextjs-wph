import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  year: string;
  image: string;
  href: string;
}

export default function ProjectCard({
  title,
  year,
  image,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className='group block transition-all duration-300'>
      <div
        className='
          relative overflow-hidden 
          rounded-lg md:rounded-xl 
          
          bg-card shadow 
          transition-all duration-300 
          group-hover:scale-[1.02]
        '
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className='
            w-full h-auto object-cover 
            rounded-lg md:rounded-xl 
            transition-transform duration-300 
            group-hover:scale-[1.03]
          '
        />
      </div>

      <h3 className='mt-4 text-lg font-semibold text-foreground'>{title}</h3>
      <p className='text-muted-foreground text-sm'>{year}</p>
    </Link>
  );
}
