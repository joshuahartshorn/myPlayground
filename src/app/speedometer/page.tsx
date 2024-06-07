'use client';
import { useState } from 'react';
import Speedometer from '@/components/speedometer';

export default function SpeedometerPage() {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Speedometer Component</h1>
      <input type="range" min="0" max="10" value={value} onChange={handleChange} className="mb-4 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4" />
      <Speedometer value={value} />
    </div>
  );
}
