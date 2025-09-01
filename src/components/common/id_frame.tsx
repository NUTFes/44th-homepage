import { ReactNode } from 'react';

interface ContentsProps {
  children: ReactNode;
}

export default function IdFrame({ children }: ContentsProps) {
  return (
    <div className="bg-base m-2 rounded-md border-2 border-main shadow_button hover:bg-second hover:opacity-80 transition-colors">
      {children}
    </div>
  );
}
