'use client';
import { useState } from 'react';
import Speedometer from '@/components/speedometer';

export default function SpeedometerPage() {
  const [value, setPercentage] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(e.target.value));
  };

  return (
    <div className="flex flex-row flex-wrap">
      <div className="container h-1/4 w-1/4">
        <Speedometer value={8.4} />
      </div>
      <div className="container h-1/2 w-1/2">
        <Speedometer value={8.4} />
      </div>
      <div className="container h-3/4 w-3/4">
        <Speedometer value={8.4} />
      </div>
    </div>
  );
}
