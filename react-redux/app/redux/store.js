import { configureStore } from '@reduxjs/toolkit'
import accountSlice from './accountSlice'
import bonusSlice from './bonusSlice'

export const store = configureStore({
  reducer: {
    account: accountSlice,
    bonus: bonusSlice
  },
})