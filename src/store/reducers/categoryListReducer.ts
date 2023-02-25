import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import API from '../../helpers/API'
import { ICategoryList } from '../../types/categories'

const initialState: ICategoryList = {
  result: [],
  loading: false,
  loaded: false,
  error: null
}

export const getCategoryList = createAsyncThunk(
  "category-list",
  async () => {
    const res = await API.get('/categories')
    return res
  }
)

export const categoryListSlice = createSlice({
  name: 'categoryList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryList.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(getCategoryList.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    }),
    builder.addCase(getCategoryList.fulfilled, (state, action) => {
      state.result = action.payload.data
      state.loaded = true
      state.loading = false
    })
  },
})

export const selectedValue = (state: RootState) => state.categoryList

export default categoryListSlice.reducer