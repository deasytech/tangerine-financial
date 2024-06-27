"use client";

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const GoBackButton = ({ text = "Go back" }: { text?: string }) => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="flex items-center gap-2">
      <ArrowLeft size={24} className="border-neutral-300 border text-zinc-400 rounded-sm" />
      <h3 className="text-zinc-500 font-gilroy-medium">{text}</h3>
    </button>
  );
};

export default GoBackButton;
