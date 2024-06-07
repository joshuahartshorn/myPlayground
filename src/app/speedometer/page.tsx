'use client';

import Speedometer from '@/components/speedometer';

export default function SpeedometerPage() {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="h-1/4 w-1/4">
        <Speedometer value={8.7} />
        <div className="h-1/2 w-1/2">
          <Speedometer value={8.7} />
        </div>
        <div className="h-3/4 w-3/4">
          <Speedometer value={8.7} />
        </div>
      </div>
    </div>
  );
}
