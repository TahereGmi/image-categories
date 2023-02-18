import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import API from '../../helpers/API'
import { ICategoryImageList } from '../../types/categories'

const initialState: ICategoryImageList = {
  result: [],
  loading: false,
  loaded: false,
  error: null
}

export const getCategoryImageList = createAsyncThunk(
  "categoryImage-list",
  async (categoryId: string | number) => {
    const res = await API.get(`/images/search?limit=10&category_ids=${categoryId}`);
    return res;
  }
);

export const categoryImageListSlice = createSlice({
  name: 'categoryImageList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryImageList.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(getCategoryImageList.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    }),
    builder.addCase(getCategoryImageList.fulfilled, (state, action) => {
      // state.result = [...state.result, ...action.payload.data]
      state.result = action.payload.data
      state.loaded = true
      state.loading = false
    })
  },
})

export const selectedValue = (state: RootState) => state.categoryImageList

export default categoryImageListSlice.reducer