import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import API from '../../helpers/API'
import { ICategoryImageList } from '../../types/categories'

const initialState: ICategoryImageList = {
  result: [],
  selectedCategoryId: null,
  showMenu: false,
  loading: false,
  loaded: false,
  error: null
}

export const getCategoryImageList = createAsyncThunk(
  "categoryImage-list",
  async ({ categoryId, page }: { categoryId: string | number | null, page: number }, { getState }) => {
    const rootState = getState() as RootState
    const res = await API.get(`/images/search?limit=10&page=${page}&category_ids=${categoryId}`);
    if(page > 0) {
      return [...rootState.categoryImageList.result, ...res.data]
    }
    return res.data;
  }
);

export const categoryImageListSlice = createSlice({
  name: 'categoryImageList',
  initialState,
  reducers: {
    getSelectedCategoryId: (state, action: PayloadAction<number | string | null>) => {
      state.selectedCategoryId = action.payload
    },
    toggleShowMenu: (state, action: PayloadAction<boolean>) => {
      state.showMenu = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryImageList.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(getCategoryImageList.rejected, (state, action) => {
      state.loading = false
      state.loaded = false
      state.error = action.error
    }),
    builder.addCase(getCategoryImageList.fulfilled, (state, action) => {
      state.result = action.payload
      state.loaded = true
      state.loading = false
    })
  },
})

export const { getSelectedCategoryId, toggleShowMenu } = categoryImageListSlice.actions

export const selectedValue = (state: RootState) => state.categoryImageList

export default categoryImageListSlice.reducer