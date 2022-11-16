import { createSlice } from '@reduxjs/toolkit'

const buyItemSlicePhoto = createSlice({
    name: 'photo',
    initialState: {
        img: '',
        photoList: [],
       },
    reducers: {
        savePhoto: (state, action) => {
            state.img = action.payload
            // state.photoList = state.photoList.push(action.payload)
            state.photoList = [action.payload, ...state.photoList]
        },
    },
})

export const { savePhoto } = buyItemSlicePhoto.actions

export const PHOTO_REDUCER = (state) => state.photo

export const photoReducer = buyItemSlicePhoto.reducer
