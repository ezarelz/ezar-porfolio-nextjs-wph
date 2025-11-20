interface SkillRowProps {
  label: string;
}

export default function SkillRow({ label }: SkillRowProps) {
  return (
    <div className='flex items-center h-[56px] border-b border-white/10 last:border-none'>
      <span className='text-white/80 text-base'>{label}</span>
    </div>
  );
}
