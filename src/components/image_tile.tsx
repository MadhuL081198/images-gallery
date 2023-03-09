import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ArrayTypeNode } from 'typescript';
import { setDetailedImage } from '../redux/imagesSlice';

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
    const dispatch = useDispatch();
    return (
        <div className='w-1/6 flex flex-col justify-start m-2 p-1'>
            <button onClick={() => dispatch(setDetailedImage(props.id))} className='flex justify-center focus:outline-none active:bg-blue-800 focus:ring focus:ring-blue-800 rounded-md'>
                <img className='object-fill h-28 w-48 border-1 border-blue-400 focus:outline-none active:bg-blue-700 focus:ring focus:ring-blue-300 rounded-md' src={props.url} alt={props.filename} />
            </button>
            <p className='w-full text-sm truncate'>{props.filename}</p>
            <div className='text-sm text-gray-500'>{convertBytesToMB(props.sizeInBytes)} MB</div>
        </div>
    );
}
