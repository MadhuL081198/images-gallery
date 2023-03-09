import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageDetailsProps } from "../components/image_details";

export interface ImagesState {
  allImages: Array<ImageDetailsProps>;
  deletedImages: Array<ImageDetailsProps>;
  favoritedImages: Array<ImageDetailsProps>;
  isLoading: boolean;
  detailedImage?: ImageDetailsProps;
}



const initialState: ImagesState = {
  allImages: [],
  deletedImages: [],
  favoritedImages: [],
  detailedImage: undefined,
  isLoading: false,
};


export const imageSlice = createSlice({
  name: "images",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setAllImages: (state, action:PayloadAction<Array<ImageDetailsProps>>) => {
      if (state.allImages.length === 0){
        state.allImages = action.payload;
        state.detailedImage = state.allImages[0]
      }
    },
    // Set favourite image
    getFavouriteImages: (state) => {
      state.favoritedImages = state.allImages.filter(img => img.favorited === true)
    },
    // Delete an image from the list
    deleteImage: (state, action: PayloadAction<string>) => {
        let img_index = state.allImages.findIndex(img => img.id === action.payload)
        let fav_img_index = state.favoritedImages.findIndex(img => img.id === action.payload)
        state.deletedImages.push(state.allImages[img_index])
        state.allImages.splice(img_index, 1);
        state.favoritedImages.splice(fav_img_index,1);
        state.detailedImage = state.allImages[0];
    },
    // Set the detailed image value
    setDetailedImage: (state, action: PayloadAction<string>) => {
      let showImage:ImageDetailsProps  = state.allImages.find(image => image.id === action.payload) as ImageDetailsProps
      state.detailedImage = showImage
      
        
    },
    toggleFavouriteImage: (state, action: PayloadAction<string>) => {
        let img_index = state.allImages.findIndex(img => img.id === action.payload)
        state.allImages[img_index].favorited = !state.allImages[img_index].favorited
        state.detailedImage = state.allImages[img_index];
        state.favoritedImages = state.allImages.filter(img => img.favorited === true)
        console.log("Toggled Favourite Image")
    }
  },

});



export const { setAllImages, setDetailedImage, deleteImage, getFavouriteImages, toggleFavouriteImage } =
  imageSlice.actions;

export default imageSlice.reducer;
