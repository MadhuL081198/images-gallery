import * as React from 'react';
import { ArrayTypeNode } from 'typescript';

export interface ImageTileProps {
    id: string,
    url: string,
    filename: string,
    sizeInBytes: number
}


{/* TODO: Change this to util function */ }
export const convertBytesToMB = (sizeInBytes: number) => {
    return (sizeInBytes / 1048576).toFixed(2)
}

export default function ImageTile(props: ImageTileProps) {
    return (
        <div className='flex flex-col justify-start m-2 p-1 hover:bg-gray-200'>
            <div className=''>
                <img className=' h-28 w-48 border-1 border-blue-400 selection:border-blue-600 rounded-md' src={props.url} alt={props.filename} />
            </div>
            <div className='text-sm text-ellipsis overflow-hidden'>{props.filename}</div>
            <div className='text-sm text-gray-500'>{convertBytesToMB(props.sizeInBytes)} MB</div>
        </div>
    );
}
