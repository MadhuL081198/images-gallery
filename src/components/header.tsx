import * as React from 'react';

export interface HeaderProps {
    title: string
}

export function Header (props: HeaderProps) {
  return (
    <div className='flex flex-row sticky top-0 p-4 m-1 bg-slate-200 rounded-md'>
        {props.title}
    </div>
  );
}