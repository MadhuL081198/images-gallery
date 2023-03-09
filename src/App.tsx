import React from 'react';
import './App.css';
import { Header } from './components/header';
import ImageTile from './components/image_tile';
import ImageDetails, { ImageDetailsProps } from './components/image_details';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { setAllImages, getFavouriteImages } from './redux/imagesSlice';
import { useGetAllImagesQuery } from './redux/imagesApi';

function App() {
  const dispatch = useDispatch();
  const { data, error, isLoading, isFetching } = useGetAllImagesQuery('');
  
  if(data && !isLoading){
    dispatch(setAllImages(data as unknown as Array<ImageDetailsProps>));
  }
  
  const { allImages, deletedImages, favoritedImages, detailedImage } = useSelector((state: RootState) => state.images);
  

  function RenderImageDetails(props:any)
    {
      let detailedImage = props.detailedImage as ImageDetailsProps
      if (props.detailedImage){
       return <ImageDetails
          id={detailedImage.id}
          url={detailedImage.url}
          filename={detailedImage.filename}
          description={detailedImage.description}
          uploadedBy={detailedImage.uploadedBy}
          createdAt={detailedImage.createdAt}
          updatedAt={detailedImage.updatedAt}
          dimensions={{
            height: detailedImage.dimensions.height,
            width: detailedImage.dimensions.width
          }}
          resolution={{
            height: detailedImage.dimensions.height,
            width: detailedImage.dimensions.width
          }}
          sizeInBytes={detailedImage.sizeInBytes}
          sharedWith={detailedImage.sharedWith}
          favorited={detailedImage.favorited} />
      }else {
        return <span></span>
      }
    }

  return (
    <div className='flex flex-row bg-slate-100 h-full'>
      <div className='basis-2/3'>
        <Header title='Photos'></Header>

        <Tabs className="mx-12 bg-slate-100">
          <TabList className="bg-slate-100 flex flex-row border-b-2 border-gray-300">
            <Tab className="bg-slate-100 px-2 py-2 text-gray-600 hover:text-blue-600 font-semibold focus:outline-none focus:border-b-2 focus:text-blue-600 focus:border-blue-600">Recently Added</Tab>
            <Tab className="bg-slate-100 px-2 py-2 text-gray-600 hover:text-blue-600 font-semibold focus:outline-none focus:border-b-2 focus:text-blue-600 focus:border-blue-600" onClick={() => dispatch(getFavouriteImages())}>Favorited</Tab>
          </TabList>
          <TabPanel className="">
            <div className='flex flex-wrap justify-center'>
              {
                allImages.map((image, i) => {
                  return <ImageTile key={image.id} id={image.id} url={image.url} filename={image.filename} sizeInBytes={image.sizeInBytes} ></ImageTile>
                }
                )
              }


            </div>
          </TabPanel>
          <TabPanel className="">
            <div className='flex flex-wrap justify-center'>
              {
                favoritedImages.map((image, i) => {
                  return <ImageTile key={image.id} id={image.id} url={image.url} filename={image.filename} sizeInBytes={image.sizeInBytes} ></ImageTile>
                }
                )
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className='basis-1/3 bg-white m-1 p-8 border-2 border-sky-100'>
        <RenderImageDetails detailedImage={detailedImage}/>
      </div>
    </div>

  );
}

export default App;
