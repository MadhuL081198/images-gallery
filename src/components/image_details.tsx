import * as React from 'react';
import { convertBytesToMB } from './image_tile';
import { InformationRow, InformationTable } from './information_table';
import moment from 'moment';

export interface IUser{
    id: string,
    name: string,
    url: string
}
export interface ImageDetailsProps {
    id: string,
    url: string,
    filename: string,
    description: string,
    uploadedBy: string,
    createdAt: string,
    updatedAt: string,
    dimensions: {
        height: number,
        width: number
    },
    resolution: {
        height: number,
        width: number
    },
    sizeInBytes: number
    sharedWith: IUser[] | [],
    favorited: boolean
}

// TODO: Move these tho util functions
export const changeResolutionTotext = (resolution:ImageDetailsProps["resolution"]) => {
    return resolution.height.toString() + " x " + resolution.width.toString()
}

export const changeDimensionsTotext = (dimentions:ImageDetailsProps["dimensions"]) => {
    return dimentions.height.toString() + " x " + dimentions.width.toString()
}



export default function ImageDetails (props: ImageDetailsProps) {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-center'>
        <img className='h-48 w-auto border-1 border-blue-400 selection:border-blue-600 rounded-md' src={props.url} alt={props.filename} />
        </div>
        <div className='flex flex-row justify-between'>
            <span className='py-2 font-semibold'>
                {props.filename}
            </span>
            <span>
                :)
            </span>
        </div>
        <div className='text-md text-gray-500'>
            {convertBytesToMB(props.sizeInBytes)} MB
        </div>

        <InformationTable title='Information'>
            <InformationRow title='Uploaded By' value={props.uploadedBy}></InformationRow>
            <InformationRow title='Created' value={moment(props.createdAt).format("MMMM DD, YYYY")}></InformationRow>
            <InformationRow title='Last modified' value={moment(props.updatedAt).format("MMMM DD, YYYY")}></InformationRow>
            <InformationRow title='Dimentions' value={changeDimensionsTotext(props.dimensions)}></InformationRow>
            <InformationRow title='Resolution' value={changeResolutionTotext(props.resolution)}></InformationRow>
        </InformationTable>

        <div className='flex flex-col my-8'>
            <span className="text-lg font-bold">Description</span>
            <span>
                {props.description}
            </span>
        </div>

        <div className='flex justify-center'>
            <button className='px-4 py-2 border-2 border-gray-200 w-3/4 hover:bg-red-500 rounded-md hover:text-white hover:border-red-600'>Delete</button>
        </div>
      
    </div>
  );
}