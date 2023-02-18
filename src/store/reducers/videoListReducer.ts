import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import API from '../../helpers/API'
import { IVideoResult } from '../../types/videoList'

const initialState: IVideoResult = {
  result: [],
  loading: false,
  loaded: false,
  error: null
}

export const getVideoList = createAsyncThunk(
  "video-list",
  async () => {
    const res = await API.get('/mostViewedVideos');
    return res;
  }
);

export const videoListSlice = createSlice({
  name: 'videoList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideoList.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(getVideoList.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    }),
    builder.addCase(getVideoList.fulfilled, (state, action) => {
      state.result = action.payload.data.data
      state.loaded = true
      state.loading = false
    })
  },
})

export const selectedValue = (state: RootState) => state.videoList

export default videoListSlice.reducer