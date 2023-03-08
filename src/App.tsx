import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './components/header';
import ImageTile from './components/image_tile';
import ImageDetails, { ImageDetailsProps } from './components/image_details';
import TabBar from './components/tab_bar';

const image_attrs:ImageDetailsProps = {
    id: "74957345-6f5b-4d66-ae9d-5d0071b40279",
    url: "https://agencyanalytics-api.vercel.app/images/0.jpg",
    filename: "tennessee_female_rubber.jpg",
    description: "Laboriosam eligendi inventore officia nemo. Quisquam explicabo voluptatem. Illo laborum facilis.",
    uploadedBy: "Ms. Jimmie Cole",
    createdAt: "2017-07-15T08:23:20.462Z",
    updatedAt: "2022-12-16T12:41:33.736Z",
    dimensions: {
      height: 4800,
      width: 3200
    },
    resolution: {
      height: 72,
      width: 72
    },
    sizeInBytes: 4812732,
    sharedWith: [],
    favorited: true
  }

function App() {
  return (
    <div className='flex flex-row bg-slate-100 h-full'>
      <div className='basis-2/3'>
        <Header title='Photos'></Header>
        <TabBar></TabBar>
        <div className='flex flex-wrap justify-center'>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
          <ImageTile id={image_attrs.id} url={image_attrs.url} filename={image_attrs.filename} sizeInBytes={image_attrs.sizeInBytes} ></ImageTile>
        </div>
      </div>
      <div className='basis-1/3 bg-white m-1 p-8 border-2 border-sky-100'>
        <ImageDetails 
        id={image_attrs.id} 
        url={image_attrs.url} 
        filename={image_attrs.filename} 
        description={image_attrs.description} 
        uploadedBy={image_attrs.uploadedBy} 
        createdAt={image_attrs.createdAt} 
        updatedAt={image_attrs.updatedAt} 
        dimensions={{
          height: image_attrs.dimensions.height,
          width: image_attrs.dimensions.width
        }} 
        resolution={{
          height: image_attrs.dimensions.height,
          width: image_attrs.dimensions.width
        }} 
        sizeInBytes={image_attrs.sizeInBytes} 
        sharedWith={image_attrs.sharedWith} 
        favorited={image_attrs.favorited}/>
      </div>
    </div>
      
  );
}

export default App;
