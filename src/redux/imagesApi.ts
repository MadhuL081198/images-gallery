import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ImageDetailsProps } from '../components/image_details'

// Using Redux toolkit createApi for api calls
export const imagesApi = createApi({
    reducerPath: 'imagesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://agencyanalytics-api.vercel.app/images.json' }),
    endpoints: (builder) => ({
      getAllImages: builder.query<ImageDetailsProps, string>({
        query: () => ``,
      }),
    }),
  })
  
  export const { useGetAllImagesQuery } = imagesApi