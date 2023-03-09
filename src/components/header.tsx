import * as React from 'react';

export interface HeaderProps {
    title: string
}

export function Header (props: HeaderProps) {
  return (
    <div className='flex flex-row top-0 py-4 px-12 m-1 font-bold text-2xl rounded-md'>
        {props.title}
    </div>
  );
}