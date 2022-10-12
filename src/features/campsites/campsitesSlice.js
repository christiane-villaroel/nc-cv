import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from "../../app/CAMPSITES";

const initialState = {
    campsiteArray: CAMPSITES
}

const campsiteSlice = createSlice({
    name:'campsites',
    initialState
})

export const campsitesReducer = campsiteSlice.reducer;

export const selectAllCampsites =(state) =>{
    return state.campsites.campsiteArray
};

export const selectCampsiteByID = (id) =>{
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite =(state) =>{
    return state.campsites.campsiteArray.find((campsite) => campsite.featured );
}
