'use client';

import { Button } from '@/components/ui/button';

interface Props {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export default function JourneyNavigator({
  onPrev,
  onNext,
  canPrev,
  canNext,
}: Props) {
  return (
    <div className='flex items-center gap-4 mt-6 justify-center'>
      <Button
        variant='nav'
        disabled={!canPrev}
        onClick={onPrev}
        className='min-w-[100px] cursor-pointer'
      >
        Prev
      </Button>

      <Button
        variant='nav'
        disabled={!canNext}
        onClick={onNext}
        className='min-w-[100px] cursor-pointer'
      >
        Next
      </Button>
    </div>
  );
}
