import { configureStore } from '@reduxjs/toolkit'
import categoryListReducer from './reducers/categoryListReducer'
import catImageListReducer from './reducers/catImageListReducer'

export const store = configureStore({
  reducer: {
    categoryList: categoryListReducer,
    categoryImageList: catImageListReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch