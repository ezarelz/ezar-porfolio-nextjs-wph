import Image from 'next/image';

interface SkillItemProps {
  icon: string;
  label: string;
  value: number;
}

export const SkillItems: React.FC<SkillItemProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className='flex items-center justify-between py-4 px-1 border-b border-white/10 w-full min-w-[260px]'>
      <div className='flex items-center gap-3'>
        <Image src={icon} alt={label} width={26} height={26} />
        <span className='text-white text-sm'>{label}</span>
      </div>

      <span className='text-white text-sm font-medium'>{value}%</span>
    </div>
  );
};
