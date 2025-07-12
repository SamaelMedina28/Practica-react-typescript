import React from 'react'

type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({ label, value, onChange, className }: Props) {
  return (
    <label className={`flex gap-2 items-center w-full ${className}`}>
      <span className="font-medium">{label}</span>
      <input className="border border-gray-300 rounded px-2 py-1 w-full" type="text" value={value} onChange={onChange} />
    </label>
  )
}