import { configureStore } from '@reduxjs/toolkit'
import videoListReducer from './reducers/videoListReducer'

export const store = configureStore({
  reducer: {
    videoList: videoListReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch