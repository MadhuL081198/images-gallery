import * as React from 'react';

export interface IInformationTableProps {
    title: string,
    children?: React.ReactNode
}

export interface IInformationRowProps {
    title: string
    value: string
}

export function InformationRow (props: IInformationRowProps) {
    return (
      <div className='flex flex-row justify-between p-2 border-b-2 border-gray-200'>
          <span>{props.title}</span>
          <span>{props.value}</span>
      </div>
    );
  }

export function InformationTable (props: IInformationTableProps) {
  return (
    <div className='flex flex-col mt-10'>
        <span className='p-2 border-b-2 border-gray-200 font-semibold'>{props.title}</span>
        {props.children}
    </div>
  );
}